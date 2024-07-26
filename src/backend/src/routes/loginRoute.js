const express = require('express')
const router = express.Router()
const { createLogin, getAllLogins, updateLogin, deleteLogin } = require('../controllers/loginController')

router.post('/', createLogin)
router.get('/', getAllLogins)
router.put('/:id', updateLogin)
router.delete('/:id', deleteLogin)

module.exports = router
