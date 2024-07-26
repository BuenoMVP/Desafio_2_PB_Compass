const express = require('express')
const router = express.Router()
const { createGame, getAllGames, updateGame, deleteGame } = require('../controllers/gameListController')

router.post('/', createGame)
router.get('/', getAllGames)
router.put('/:id', updateGame)
router.delete('/:id', deleteGame)

module.exports = router
