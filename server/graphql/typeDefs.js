const { gql } = require('apollo-server')

module.exports = gql`
    type User {
        id: ID!
        username: String!
        email: String!
        token: String!
        followers: [Follower!]!
        following: [Following!]!
        posts: [Post!]!
    }
    type Post {
        title: String!
        link: String!
        content: String!
        username: String!
        likes: [Like]!
        comments: [Comment]!
        categories: [String]!
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
    type Follower {
        id: ID!
        createdAt: String!
        username: String!
    }
    type Following {
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
        getUser(username: String!): User!
        getPosts(category: String): [Post!]!
        getPostsByUser(username: String!): [Post!]!
        getPost(id: String!): Post!
    }
    type Mutation {
        addPost(
            title: String!
            link: String!
            content: String!
            categories: [String]!
        ): Post!
        likePost(id: ID!): Post!
        deletePost(id: ID!): String!
        createComment(postId: ID! body: String!): Post!
        deleteComment(postId: ID!, commentId: ID!): String!
        follow(usernameToFollow: String!): User!
        register(registerInput: RegisterInput): User!
        login(username: String! password: String!): User!
    }
`