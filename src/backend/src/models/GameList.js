const mongoose = require('mongoose')

const gamesListSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    category: { 
        type: String, 
        required: true 
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    loginId: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('GamesList', gamesListSchema)