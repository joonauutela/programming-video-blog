import gql from 'graphql-tag'

export const FETCH_POSTS_QUERY = gql`
{
 getPosts{
     title
     content
     link
     id
     likes {
         id
         createdAt
         username
     }
     createdAt
     categories
 }
}
`

export const FETCH_POST_QUERY = gql`
    query getPost($id: String!){
        getPost(id: $id){
            title
            content
            link
            likes {
                id
                username
            }
            createdAt
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