const express = require('express')
const router = express.Router()
const {getDays, setDay, updateDay, deleteDay} = require('../controllers/dayController')

router.route('/').get(getDays).post(setDay)
router.route('/:id').put(updateDay).delete(deleteDay)

module.exports = router