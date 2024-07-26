const express = require('express');
const connectDB = require('../config/db');
const testRoute = require('../src/routes/test');
const loginRoute = require('../src/routes/loginRoute');
const gameRoute = require('../src/routes/gameListRoute');

const app = express()

connectDB()

app.use(express.json())

app.use(testRoute)
app.use('/login', loginRoute)
app.use('/games', gameRoute)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
