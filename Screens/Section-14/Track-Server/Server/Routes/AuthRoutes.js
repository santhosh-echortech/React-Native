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

router.post('/signin', async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(422).send({ error: 'Email & Password required' })
    }

    const user = await User.findOne({ email })
    if (!user) {
        return res.status(400).send({ error: 'User Not Found' })
    }

    try {
        await user.comparePassword(password)
        const token=jwt.sign({userId:user._id},'mySecretKey')
        res.send({token})
    } catch (error) {
        return res.status(422).send({ error: 'Invalid Email or Password ' })
    }

})

module.exports = router