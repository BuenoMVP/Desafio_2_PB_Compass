const express = require('express')
const router = express.Router()
const verifyToken = require('../middlewares/authMiddleware')
const { createGame, getAllGames, updateGame, deleteGame, countGamesByUser } = require('../controllers/gameListController')

router.post('/', verifyToken, createGame)
router.get('/', verifyToken, getAllGames)
router.put('/:id', verifyToken, updateGame)
router.delete('/:id', verifyToken, deleteGame)
router.get('/count', verifyToken, countGamesByUser)

module.exports = router
