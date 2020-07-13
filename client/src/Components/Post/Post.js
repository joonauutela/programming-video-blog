import React, { useState } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { LIKE_POST_QUERY, FETCH_POSTS_QUERY } from '../../queries'
import { useMutation } from '@apollo/react-hooks'

import './Post.css'

const Post = ({ title, content, link, likes, id }) => {

    const [isLiked, setIsLiked] = useState(false)

    const [like] = useMutation(LIKE_POST_QUERY, {
        refetchQueries: [{ query: FETCH_POSTS_QUERY }]
    })
    const likePost = () => {
        like({ variables: { id } }).
            then(setIsLiked(true))
    }

    return (
        <Card fluid color='teal'>
            <Card.Content>
                <Card.Header className='post-header'>{title}</Card.Header>
                <Card.Meta style={{ "paddingBottom": "30px" }}>Posted 1.7.2020 By <Link className='post-user' to='/'>finnishr</Link></Card.Meta>
                <div className='post-image-container'>
                    <Link to={`/post/${id}`}><img src='https://img.youtube.com/vi/GieYIzvdt2U/0.jpg' className='post-image' /></Link>
                </div>
                <Card.Description>
                    <p>{content}</p>
                    <Link to={`/post/${id}`}>Full post</Link>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <span style={{ "fontSize": "1.2rem" }} >
                    {likes} likes
                    </span>
                {!isLiked &&
                    <Icon onClick={() => likePost()} name='like' color='green' style={{ "paddingLeft": "1%" }} size="large" />
                }
            </Card.Content>
        </Card>
    )
}

export default Post
