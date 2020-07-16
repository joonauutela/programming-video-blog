const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Post = require('../models/Post')
const { validateCreatePostInput } = require('../util/validators/createPost')
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
            const { valid, errors } = validateCreatePostInput(args.title, args.link, args.content)
            // Check if passes all validators
            if (!valid) {
                throw new UserInputError('Errors', { errors })
            }

            // Check if passes authentication
            if (!currentUser) {
                throw new AuthenticationError("not authenticated")
            }
            const post = new Post({
                ...args,
                user: currentUser,
                likes: [],
                createdAt: new Date().toISOString()
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
            if (!currentUser) {
                throw new AuthenticationError("not authenticated")
            }

            const post = await Post.findById(args.id);
            const username = currentUser.username
            if (post) {
                if (post.likes.find((like) => like.username === username)) {
                    // Post already likes, unlike it
                    post.likes = post.likes.filter((like) => like.username !== username);
                } else {
                    // Not liked, like post
                    post.likes.push({
                        username,
                        createdAt: new Date().toISOString()
                    });
                }

                await post.save();
                return post;
            } else throw new UserInputError('Post not found');
        }
    }
}