import React from 'react'
import { Image, Button } from 'semantic-ui-react'
import { FETCH_POSTS_QUERY } from '../../queries'
import { useQuery } from '@apollo/react-hooks'

import Post from '../../components/Post/Post'

import './User.css'

const User = () => {

    const { data, loading } = useQuery(FETCH_POSTS_QUERY)

    if (loading) return null
    return (
        <div className="user-container">
            <div className="user-display-container">
                <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' align="left" circular />
                <div className="user-info-container">
                    <h1 className="username-header">Joona Uutela <Button primary>Follow</Button></h1>
                    <p className="user-info-text">Followers: 10</p>
                    <p className="user-info-text">Following: 10</p>
                    <p className="user-info-text">Posts: 10</p>
                </div>
            </div>
            <div className="user-posts-container">
                <h1 className="user-posts-title">Posts by joona:</h1>
                {data.getPosts.map(post => {
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