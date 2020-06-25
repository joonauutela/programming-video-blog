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
    likes: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    }
    //TODO: Create comments attribute
    // createdAt: Date
})

module.exports = mongoose.model('Post', schema)