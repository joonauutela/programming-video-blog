import React from 'react'
import { Image, Button } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'
import { FETCH_POSTS_BY_USER_QUERY } from '../../queries'
import { useQuery } from '@apollo/react-hooks'

import Post from '../../components/Post/Post'

import './User.css'

const User = () => {

    const { username } = useParams()
    const { data, loading } = useQuery(FETCH_POSTS_BY_USER_QUERY, {
        variables: { username }
    })

    if (loading) return null

    return (
        <div className="user-container">
            <div className="user-display-container">
                <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' align="left" circular />
                <div className="user-info-container">
                    <h1 className="username-header">{username} <Button primary>Follow</Button></h1>
                    <p className="user-info-text">Followers: 0</p>
                    <p className="user-info-text">Following: 0</p>
                    <p className="user-info-text">Posts: {data.getPostsByUser.length}</p>
                </div>
            </div>
            <div className="user-posts-container">
                <h1 className="user-posts-title">Posts by {username}:</h1>
                {data.getPostsByUser.map(post => {
                    return <Post
                        key={post.id}
                        title={post.title}
                        link={post.link}
                        likes={post.likes}
                        content={post.content}
                        createdAt={post.createdAt}
                        postedBy={post.username}
                        comments={post.comments.length}
                        categories={post.categories}
                        id={post.id}
                    />
                })}
            </div>
        </div>
    )
}

export default User