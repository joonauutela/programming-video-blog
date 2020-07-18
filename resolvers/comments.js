const Post = require('../models/Post')
const { validateCreateCommentInput } = require('../util/validators/createComment')
const { UserInputError } = require('apollo-server')

module.exports = {
    Mutation: {
        createComment: async (_, { postId, body }, { currentUser }) => {

            const { valid, errors } = validateCreateCommentInput(body)

            if (!valid) {
                throw new UserInputError('Errors', { errors })
            }
            if (!currentUser) {
                throw new AuthenticationError("not authenticated")
            }
            const post = await Post.findById(postId)

            if (post) {
                post.comments.unshift({
                    body,
                    username: currentUser.username,
                    createdAt: new Date().toISOString()
                })
                await post.save()
                return post
            } else throw new UserInputError('Post not found')
        }
    }
}