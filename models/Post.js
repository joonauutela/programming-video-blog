const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3
    },
    link: {
        type: String,
        required: true,
        minlength: 4
    },
    content: {
        type: String,
        required: true,
        minlength: 4
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [
        {
            body: String,
            username: String,
            createdAt: Date
        }
    ],
    likes: Number,
    createdAt: Date
})

module.exports = mongoose.model('Post', schema)