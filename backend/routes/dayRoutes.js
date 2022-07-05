const express = require('express')
const router = express.Router()
const {getDays, setDay, updateDay, deleteDay} = require('../controllers/dayController')
const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getDays).post(protect, setDay)
router.route('/:id').put(protect, updateDay).delete(protect, deleteDay)

module.exports = router