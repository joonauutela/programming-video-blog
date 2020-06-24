const userResolvers = require('./users')
const postResolvers = require('./posts')

module.exports = {
    Query: {
        ping: () => 'Pinged2',
        ...userResolvers.Query,
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...postResolvers.Mutation
    }
}