const asyncHandler = require('express-async-handler')

const Day = require('../models/dayModel')

// @desc Get Days
// @route GET /api/days
// @access Private
const getDays = asyncHandler (async (req, res) => {
    const days = await Day.find({ user: req.user.id })
    res.status(200).json(days)
})

// @desc Set Day
// @route POST /api/days
// @access Private
const setDay = asyncHandler (async (req, res) => {
   if(!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field.')
   }
   const day = await Day.create({
    text: req.body.text,
    user: req.user.id
   })
    res.status(200).json(day)
})

// @desc Update Day
// @route PUT /api/days/:id
// @access Private
const updateDay = asyncHandler (async (req, res) => {
    const day = await Day.findById(req.params.id)
    if(!day) {
        res.status(200)
        throw new Error('Day not found.')
    }

    const updatedDay = await Day.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedDay)
})

// @desc Delete Goal
// @route DELETE /api/days/:id
// @access Private
const deleteDay = asyncHandler (async (req, res) => {
    const day = await Day.findById(req.params.id)
    if(!day) {
        res.status(200)
        throw new Error('Day not found.')
    }
    await day.remove()
    res.status(200).json({id: req.params.id})
})

module.exports = {
    getDays, 
    setDay, 
    updateDay, 
    deleteDay
}