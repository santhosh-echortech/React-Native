require('./Models/UserModel')
require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')
const bodyPareser = require('body-parser')
const app = express()
const PORT = 3000
const AuthRoutes = require('./Routes/AuthRoutes')
const Auth = require('./Middlewares/Auth')

app.use(bodyPareser.json())
app.use(AuthRoutes)
mongoose.connect('mongodb+srv://SanthoshKumar:xowUHOxUswyP23PE@track-app.ibwkxqf.mongodb.net/test',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log('MONGO DB CONNECTED')
}).catch((error) => {
    console.log('MONGO DB CONNECTION ERROR', error)
})

app.get('/', Auth, (req, res) => {
    res.send(`Email ${req.body.email}`)
})


app.listen(PORT, () => {
    console.log('SERVER STARTED!')
})