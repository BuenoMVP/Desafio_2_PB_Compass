const GamesList = require('../models/GameList')

const createGame = async (req, res) => {
    const { name, description, price, category } = req.body

    try {
        const newGame = new GamesList({ name, description, price, category })
        await newGame.save()
        res.status(201).send(newGame)
    } catch (error) {
        res.status(500).send({ error: 'Error saving game' })
    }
}

const getAllGames = async (req, res) => {
    try {
        const games = await GamesList.find()
        res.status(200).send(games)
    } catch (error) {
        res.status(500).send({ error: 'Error fetching games' })
    }
}

const updateGame = async (req, res) => {
    const { id } = req.params
    const { name, description, price, category } = req.body

    try {
        const updatedGame = await GamesList.findByIdAndUpdate(
            id,
            { name, description, price, category },
            { new: true, runValidators: true }
        )

        if (!updatedGame) {
            return res.status(404).send({ error: 'Game not found' })
        }

        res.status(200).send(updatedGame)
    } catch (error) {
        res.status(500).send({ error: 'Error updating game' })
    }
}

const deleteGame = async (req, res) => {
    const { id } = req.params

    try {
        const deletedGame = await GamesList.findByIdAndDelete(id)

        if (!deletedGame) {
            return res.status(404).send({ error: 'Game not found' })
        }

        res.status(200).send({ message: 'Game deleted successfully' })
    } catch (error) {
        res.status(500).send({ error: 'Error deleting game' })
    }
}

module.exports = { createGame, getAllGames, updateGame, deleteGame }