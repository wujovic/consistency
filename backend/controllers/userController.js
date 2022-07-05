// @desc Register New User
// @route POST /api/users
// @access Public
const registerUser = (req, res) => {
    res.json({message: 'Register user.'})
}

// @desc Authenticate a user
// @route POST /api/users/login
// @access Public
const loginUser = (req, res) => {
    res.json({message: 'Login user.'})
}

// @desc Get User Data
// @route GET /api/users/me
// @access Public
const getMe = (req, res) => {
    res.json({message: 'Get user data.'})
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}