const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Post = require('../models/Post')
const { AuthenticationError, UserInputError } = require('apollo-server')

require('dotenv').config()

module.exports = {
    Query: {
        getPosts: async (_, args, context) => {
            if (args.category) {
                return Post.find({ category: args.category })
            }
            return Post.find({})
        },
        getPost: async (_, args) => {
            const post = await Post.findById(args.id)
            return post
        }
    },
    Mutation: {
        addPost: async (_, args, { currentUser }) => {
            if (!currentUser) {
                throw new AuthenticationError("not authenticated")
            }
            const post = new Post({
                ...args,
                user: currentUser,
                likes: 0
            })
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
        },
        likePost: async (_, args, { currentUser }) => {
            //if (!currentUser) {
            //    throw new AuthenticationError("not authenticated")
            //}
            const post = await Post.findById(args.id)
            post.likes++
            return await post.save()

        }
    }
}