const { gql } = require('apollo-server')

module.exports = gql`
    type User {
        id: ID!
        username: String!
        email: String!
        token: String!
        posts: [Post!]!
    }
    type Post {
        title: String!
        link: String!
        content: String!
        user: User!
        likes: [Like]!
        comments: [Comment]!
        category: String!
        id: ID!
        createdAt: String!
    }
    type Comment {
        id: ID!
        createdAt: String!
        username: String!
        body: String!
    }
    type Like {
        id: ID!
        createdAt: String!
        username: String!
    }
    input RegisterInput {
        username: String!
        email: String!
        password: String!
        confirmPassword: String!
    }
    type Query {
        ping: String!
        getUsers: [User!]!
        getPosts(category: String): [Post!]!
        getPost(id: String!): Post!
    }
    type Mutation {
        addPost(
            title: String!
            link: String!
            content: String!
            category: String!
        ): Post!
        likePost(id: ID!): Post!
        createComment(postId: ID! body: String!): Post!
        register(registerInput: RegisterInput): User!
        login(username: String! password: String!): User!
    }
`