const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Post = require('../models/Post')

require('dotenv').config()

module.exports = {
    Mutation: {
        addPost: async (_, args, { currentUser }) => {
            if (!currentUser) {
                throw new AuthenticationError("not authenticated")
            }

            const post = new Post({ ...args, user: currentUser })
            try {
                const savedPost = await post.save()
                currentUser.posts = currentUser.posts.concat(savedPost._id)
                await currentUser.save()
            } catch (error) {
                throw new UserInputError(error.message, {
                    invalidArgs: args,
                })
            }
            return post
        }
    }
}