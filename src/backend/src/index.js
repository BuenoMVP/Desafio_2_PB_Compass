const express = require('express')
const connectDB = require('../config/db')
const Login = require('../src/models/Login')
const GamesList = require('../src/models/GameList')

const app = express()

connectDB()

app.use(express.json())
const port = 3000

app.get('/teste', (res, req) => {
    res.send('teste')
})

app.listen(port, () => {
    console.log(`Server running on port ${PORT}`)
})
