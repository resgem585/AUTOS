const express = require('express')
const router = express.Router()
const { getAuto, setAuto, updateAuto, deleteAuto } = require('../controllers/autosController')

router.route('/').get(getAuto).post(setAuto)
router.route('/:id').delete(deleteAuto).put(updateAuto)


module.exports = router