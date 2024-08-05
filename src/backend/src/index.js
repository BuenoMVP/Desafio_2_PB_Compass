const express = require('express')
const connectDB = require('../config/db')
const loginRoute = require('../src/routes/loginRoute')
const gameRoute = require('../src/routes/gameListRoute')
const cors = require('cors')

const app = express()

app.use(cors({
  origin: 'http://localhost:5173',
}))

connectDB()

app.use(express.json())

app.use('/login', loginRoute)
app.use('/games', gameRoute)

const port = process.env.PORT || 3000;

app.listen(port, () => { })