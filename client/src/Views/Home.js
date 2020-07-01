import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Post from '../components/Post'

const Home = () => {
    const { loading, data } = useQuery(FETCH_POSTS_QUERY)

    if (loading) {
        return <h1>loading</h1>
    }
    return (
        <div>
            <h1>All posts</h1>
            <Post />
            <Post />
            <Post />
        </div >
    )
}

const FETCH_POSTS_QUERY = gql`
   {
    getPosts{
        title
    }
  }
`

export default Home