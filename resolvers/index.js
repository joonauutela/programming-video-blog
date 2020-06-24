const userResolvers = require('./users')

module.exports = {
    Query: {
        ping: () => 'Pinged2',
        ...userResolvers.Query
    },
    Mutation: {
        ...userResolvers.Mutation
    }
}