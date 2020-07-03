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