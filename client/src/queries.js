import gql from 'graphql-tag'

export const FETCH_POSTS_QUERY = gql`
{
 getPosts{
     title,
     content,
     link,
     id,
     likes
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