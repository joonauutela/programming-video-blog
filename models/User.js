const mongoose = require('mongoose')

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


module.exports = mongoose.model('User', userSchema)