const userResolvers = require('./users')
const postResolvers = require('./posts')
const commentsResolvers = require('./comments')

module.exports = {
    Query: {
        ...userResolvers.Query,
        ...postResolvers.Query,
        ...commentsResolvers.Query
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...postResolvers.Mutation,
        ...commentsResolvers.Mutation
    }
}