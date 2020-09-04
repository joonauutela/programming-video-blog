const Post = require('../../models/Post')
const { validateCreateCommentInput } = require('../../util/validators/createComment')
const { UserInputError, AuthenticationError } = require('apollo-server-express')

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
        },
        deleteComment: async (_, { postId, commentId }, { currentUser }) => {
            if (!currentUser) {
                throw new AuthenticationError("not authenticated")
            }

            const post = await Post.findById(postId)
            if (post) {
                const commentIndex = post.comments.findIndex((c) => c.id === commentId)

                if (post.comments[commentIndex].username === currentUser.username) {
                    post.comments.splice(commentIndex, 1)
                    await post.save()
                    return 'Comment deleted succesfully'
                } else {
                    throw new AuthenticationError('Action not allowed')
                }
            } else {
                throw new UserInputError('Post not found')
            }
        }
    },
}