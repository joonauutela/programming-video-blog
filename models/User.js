const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        minlength: 3
    },
    passwordHash: String,
    /*
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
    */
})

userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', userSchema)