const { ApolloServer } = require('apollo-server')
const gql = require('graphql-tag')


const typeDefs = gql`
    type Query {
        ping: String!
    }
`
const resolvers = {
    Query: {
        ping: () => 'Pinged'
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen({ port: 4000 })
    .then(res => {
        console.log(`Server running at ${res.url}`)
    })