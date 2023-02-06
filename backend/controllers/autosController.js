const asyncHandler = require('express-async-handler')

const Auto = require('../models/autosModel')

const getAuto = asyncHandler(async (req, res) => {
    const auto = await Auto.find()

    res.status(200).json(auto)
})

const setAuto = asyncHandler(async (req, res) => {
    if (!req.body.Marca || !req.body.Modelo || !req.body.Anio || !req.body.Color) {

        res.status(400)
        throw new Error('Auto no registrado, verifica tus datos')
    }

    const auto = await Auto.create({
        Marca: req.body.Marca,
        Modelo: req.body.Modelo,
        Anio: req.body.Anio,
        Color:  req.body.Color
    })

    res.status(201).json(auto)
})

const updateAuto = asyncHandler(async (req, res) => {

    const auto = await Auto.findById(req.params.id)

    if (!auto) {
        res.status(400)
        throw new Error('Auto no encontrado')
    }

    const updateAuto = await Auto.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updateAuto)
})

const deleteAuto = asyncHandler(async (req, res) => {

    const auto = await Auto.findById(req.params.id)

    if (!auto) {
        res.status(400)
        throw new Error('Auto no encontrado')
    }

    //const deletedTarea = await Tarea.findByIdAndDelete(req.params.id)
    await Auto.remove()

    res.status(200).json(req.params.id)
})

module.exports = {
    getAuto,
    setAuto,
    updateAuto,
    deleteAuto
}