const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true })

// userSchema.pre('save', function () {
//     const user = this
//     if (!user.isModified('password')) {
//         return next()
//     }
//     bcrypt.genSalt(10, (error, salt) => {
//         if (error) {
//             return next(error)
//         }

//         bcrypt.hash(user.password, salt, () => {
//             if (error) {
//                 return next(error)
//             }
//             user.password = hash
//             next()
//         })
//     })
// })

// userSchema.methods.comparePassword = function (candidatePassword) {
//     const user = this
//     return new Promise((resolve, reject) => {
//         bcrypt.compare(candidatePassword, user.password, (error, isMatch) => {
//             if (error) {
//                 return reject(error)
//             }

//             if (!isMatch) {
//                 return reject(false)
//             }
//             resolve(true)
//         })
//     })
// }

mongoose.model('User', userSchema)

// const User = mongoose.model('User', userSchema)
// module.exports = User
