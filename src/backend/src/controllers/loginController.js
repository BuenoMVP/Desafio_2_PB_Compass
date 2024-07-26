const Login = require('../models/Login');

const createLogin = async (req, res) => {
    const { email, password } = req.body

    try {
        const newLogin = new Login({ email, password })
        await newLogin.save()
        res.status(201).send(newLogin)
    } catch (error) {
        res.status(500).send({ error: 'Error saving login' })
    }
}

const getAllLogins = async (req, res) => {
    try {
        const logins = await Login.find()
        res.status(200).send(logins)
    } catch (error) {
        res.status(500).send({ error: 'Error fetching logins' })
    }
}

const updateLogin = async (req, res) => {
    const { id } = req.params;
    const { email, password } = req.body;

    try {
        const updatedLogin = await Login.findByIdAndUpdate(
            id,
            { email, password },
            { new: true, runValidators: true }
        )

        if (!updatedLogin) {
            return res.status(404).send({ error: 'Login not found' })
        }

        res.status(200).send(updatedLogin);
    } catch (error) {
        res.status(500).send({ error: 'Error updating login' })
    }
}

const deleteLogin = async (req, res) => {
    const { id } = req.params

    try {
        const deletedLogin = await Login.findByIdAndDelete(id)

        if (!deletedLogin) {
            return res.status(404).send({ error: 'Login not found' })
        }

        res.status(200).send({ message: 'Login deleted successfully' })
    } catch (error) {
        res.status(500).send({ error: 'Error deleting login' })
    }
}

module.exports = { createLogin, getAllLogins, updateLogin, deleteLogin }