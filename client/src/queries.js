import gql from 'graphql-tag'

export const FETCH_POSTS_QUERY = gql`
{
 getPosts{
     title
     content
     link
     id
     username
     likes {
         id
         createdAt
         username
     }
     createdAt
     categories
     comments {
        username
        createdAt
        body
    }
 }
}
`

export const FETCH_POST_QUERY = gql`
    query getPost($id: String!){
        getPost(id: $id){
            title
            content
            link
            comments{
                id
            }
            likes {
                id
                username
            }
            createdAt
            comments {
                id
                username
                createdAt
                body
            }
        }
    }
`
export const FETCH_POSTS_BY_USER_QUERY = gql`
    query getPostsByUser($username: String!){
        getPostsByUser(username: $username){
            title
            content
            link
            id
            username
            likes {
                id
                createdAt
                username
            }
            createdAt
            categories
            comments {
            username
            createdAt
            body
            }
        }
    }
`
export const FETCH_USER_QUERY = gql`
    query getUser($username: String!){
        getUser(username: $username){
            username,
            followers {
                username
            }
            following {
                username
            }
            posts {
                title
                content
                link
                id
                username
                likes {
                    id
                    createdAt
                    username
                }
                createdAt
                categories
                comments {
                    username
                    createdAt
                    body
                }
            }
        }
    }
`

export const LIKE_POST_QUERY = gql`
mutation likePost($id: ID!){
    likePost(id: $id){
        title
    }
}
`

export const REGISTER_USER = gql`
    mutation register(
        $username: String!
        $email: String!
        $password: String!
        $confirmPassword: String!
    ) {
        register(
            registerInput: {
                username: $username,
                email: $email,
                password: $password,
                confirmPassword: $confirmPassword,
            }
        ){
            username
        }
    }
`

export const LOGIN_USER = gql`
    mutation login(
        $username: String!
        $password: String!
    ) {
        login(
            username: $username,
            password: $password
        ) {
            username,
            id,
            email,
            token
        }
    }
`

export const FOLLOW_MUTATION = gql`
    mutation follow($usernameToFollow: String!){
        follow(usernameToFollow: $usernameToFollow) {
            username
        }
    }
`

export const CREATE_POST_MUTATION = gql`
mutation addPost(
    $title: String!
    $link: String!
    $content: String!
    $categories: [String]!
){
  addPost(
    title: $title
    link: $link
    content: $content
    categories: $categories
  )
  {
    title
    link
    content
    categories
  }
}
`

export const DELETE_POST_MUTATION = gql`
    mutation deletePost($id: ID!){
        deletePost(id: $id)
    }
`

export const CREATE_COMMENT_MUTATION = gql`
    mutation($postId: ID!, $body: String!){
        createComment(postId: $postId, body: $body){
            id
        }
    }
`

export const DELETE_COMMENT_MUTATION = gql`
    mutation deleteComment($postId: ID! $commentId: ID!){
        deleteComment(postId: $postId commentId: $commentId)
    }
`