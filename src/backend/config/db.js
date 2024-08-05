const mongoose = require('mongoose')

mongoose.set('strictQuery', true);

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://GustavoKophal:Jw0GJxDr9qiz8dWA@desafio2crud.wciu45d.mongodb.net/?retryWrites=true&w=majority&appName=Desafio2Crud', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (error) {
        process.exit(1)
    }
}

module.exports = connectDB