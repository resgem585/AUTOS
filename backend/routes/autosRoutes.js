const express = require('express')
const router = express.Router()
const { getAuto, setAuto, updateAuto, deleteAuto } = require('../controllers/autosController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getAuto).post(protect, setAuto)
router.route('/:id').delete(protect, deleteAuto).put(protect, updateAuto)


module.exports = router