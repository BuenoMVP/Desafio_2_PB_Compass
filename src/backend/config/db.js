const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://GustavoKophal:Jw0GJxDr9qiz8dWA@desafio2crud.wciu45d.mongodb.net/?retryWrites=true&w=majority&appName=Desafio2Crud');
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB', error)
        process.exit(1)
    }
}

module.exports = connectDB
