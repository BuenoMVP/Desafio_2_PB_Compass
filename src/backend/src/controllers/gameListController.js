const GamesList = require('../models/GameList')

const createGame = async (req, res) => {
    const { name, description, price, category } = req.body
    const loginId = req.body.loginId || req.query.loginId

    try {
        const newGame = new GamesList({ name, description, price, category, loginId })
        await newGame.save()
        res.status(201).send(newGame)
    } catch (error) {
        console.error('Erro ao salvar jogo:', error)
        res.status(500).send({ error: 'Error saving game' })
    }
}

const getAllGames = async (req, res) => {
    const loginId = req.query.loginId

    try {
        const games = await GamesList.find({ loginId })
        res.status(200).send(games)
    } catch (error) {
        console.error('Erro ao buscar jogos:', error)
        res.status(500).send({ error: 'Error fetching games' })
    }
}

const updateGame = async (req, res) => {
    const { id } = req.params
    const { name, description, price, category } = req.body
    const loginId = req.body.loginId || req.query.loginId

    try {
        const updatedGame = await GamesList.findOneAndUpdate(
            { _id: id, loginId },
            { name, description, price, category },
            { new: true, runValidators: true }
        );

        if (!updatedGame) {
            return res.status(404).send({ error: 'Game not found' });
        }

        res.status(200).send(updatedGame);
    } catch (error) {
        console.error('Erro ao atualizar jogo:', error);
        res.status(500).send({ error: 'Error updating game' });
    }
}

const deleteGame = async (req, res) => {
    const { id } = req.params
    const loginId = req.user.uid
  
    try {
      const deletedGame = await GamesList.findOneAndDelete({ _id: id, loginId })
      if (!deletedGame) {
        return res.status(404).send({ error: 'Game not found' })
      }
      res.status(200).send({ message: 'Game deleted successfully' })
    } catch (error) {
      res.status(500).send({ error: 'Error deleting game' })
    }
  }

const countGamesByUser = async (req, res) => {
    const { loginId } = req.query

    try {
        const count = await GamesList.countDocuments({ loginId })
        res.status(200).send({ count })
    } catch (error) {
        console.error('Erro ao contar jogos:', error)
        res.status(500).send({ error: 'Error counting games' })
    }
}

module.exports = { createGame, getAllGames, updateGame, deleteGame, countGamesByUser }
