const { gql } = require('apollo-server')

module.exports = gql`
    type User {
        id: ID!
        username: String!
        passwordHash: String!
    }
    type Token {
        value: String!
    }
    input RegisterInput {
        username: String!
        password: String!
        confirmPassword: String!
    }
    type Query {
        ping: String!
        getUsers: [User!]!
    }
    type Mutation {
        register(registerInput: RegisterInput): User

        login(
            username: String!
            password: String!
          ): Token
    }
`