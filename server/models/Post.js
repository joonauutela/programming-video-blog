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
    username: {
        type: String,
        required: true
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
    categories: [
        {
            type: String
        }
    ],
    createdAt: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Post', schema)