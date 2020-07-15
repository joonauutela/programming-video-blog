import React, { useState } from 'react'
import { Card, Icon, Button, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { getVideoID, getDate } from '../../util/hooks'
import { LIKE_POST_QUERY, FETCH_POSTS_QUERY } from '../../queries'
import { useMutation } from '@apollo/react-hooks'

import './Post.css'

const Post = ({ title, content, link, likes, id, createdAt }) => {

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
                <Card.Meta style={{ "paddingBottom": "30px" }}>Posted {getDate(createdAt)} By <Link className='post-user' to='/'>finnishr</Link></Card.Meta>
                <div className='post-image-container'>
                    <Link to={`/post/${id}`}><img src={`https://img.youtube.com/vi/${getVideoID(link)}/0.jpg`} className='post-image' /></Link>
                </div>
                <Card.Description>
                    <p className='post-content'>{content}</p>
                    <Link to={`/post/${id}`}>Full post</Link>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button as="div" labelPosition="right" onClick={likePost}>
                    <Button color="teal" basic>
                        <Icon name="heart" />
                    </Button>
                    <Label basic color="teal" pointing="left">
                        {likes}
                    </Label>
                </Button>
                <Button as="div" labelPosition="right">
                    <Button color="blue" basic>
                        <Icon name="comments" />
                    </Button>
                    <Label basic color="blue" pointing="left">
                        0
                    </Label>
                </Button>
            </Card.Content>
        </Card>
    )
}

export default Post
