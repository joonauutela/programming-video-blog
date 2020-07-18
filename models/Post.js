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
    likes: [
        {
            username: String,
            createdAt: String
        }
    ],
    comments: [
        {
            body: String,
            username: String,
            createdAt: String
        }
    ],
    category: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Post', schema)