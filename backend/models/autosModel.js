const mongoose = require('mongoose')

const autosSchema = mongoose.Schema({
    Marca: {
        type: String,
        required: [true, 'Por favor teclea un valor']
    },
    Modelo: {
        type: String,
        required: [true, 'Por favor teclea un valor']
    },
    Anio: {
        type: String,
        required: [true, 'Por favor teclea un valor']
    },
    Color: {
        type: String,
        required: [true, 'Por favor teclea un valor']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Auto', autosSchema)