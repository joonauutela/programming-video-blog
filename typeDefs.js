const { gql } = require('apollo-server')

module.exports = gql`
    type User {
        id: ID!
        username: String!
        passwordHash: String!
        token: String!
    }
    input RegisterInput {
        username: String!
        password: String!
        confirmPassword: String!
    }
    type Query {
        ping: String!
    }
    type Mutation {
        register(registerInput: RegisterInput): User!
    }
`