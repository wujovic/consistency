// @desc Get Days
// @route GET /api/days
// @access Private
const getDays = (req, res) => {
    res.status(200).json({message: 'Get Days'})
}

// @desc Set Day
// @route POST /api/days
// @access Private
const setDay = (req, res) => {
    res.status(200).json({message: 'Set Day'})
}

// @desc Update Day
// @route PUT /api/days/:id
// @access Private
const updateDay = (req, res) => {
    res.status(200).json({message: `Update Day ${req.params.id}`})
}

// @desc Delete Goal
// @route DELETE /api/days/:id
// @access Private
const deleteDay = (req, res) => {
    res.status(200).json({message: `Delete Day ${req.params.id}`})
}

module.exports = {
    getDays, 
    setDay, 
    updateDay, 
    deleteDay
}