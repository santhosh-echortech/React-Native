const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')
const jwt = require('jsonwebtoken')

router.post('/signup', async (req, res) => {
    const { email, password } = req.body
    try {
        const user = new User({ email, password })
        await user.save()

        const token = jwt.sign({ userId: user._id }, 'mySecretKey')

        res.send({
            token,
            message: 'User Saved Successfully'
        })
    } catch (error) {
        res.status(422).send(error.message)
    }

})

module.exports = router