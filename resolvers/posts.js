const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Post = require('../models/Post')

require('dotenv').config()

module.exports = {
    Mutation: {
        addPost: async (_, args, { currentUser }) => {
            console.log("addpostissa")
            const post = new Post({ ...args, user: currentUser })
            console.log(post)
            await post.save()
            return post;
        }
    }
}