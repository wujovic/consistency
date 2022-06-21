const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 4000
const app = express()
const {errorHandler} = require('../backend/middleware/errorMiddleware')

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/days', require('./routes/dayRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`));
