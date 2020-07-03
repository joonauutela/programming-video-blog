import React, { useState } from 'react'
import { Card, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { LIKE_POST_QUERY, FETCH_POSTS_QUERY } from '../queries'
import { useMutation } from '@apollo/react-hooks'

const Post = ({ title, content, link, likes, id }) => {

    const [isLiked, setIsLiked] = useState(false)

    const [like] = useMutation(LIKE_POST_QUERY, {
        refetchQueries: [{ query: FETCH_POSTS_QUERY }]
    })
    const likePost = (post) => {
        like({ variables: { id } }).
            then(setIsLiked(true))
    }

    return (
        <Card fluid color='teal'>
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>Posted 1.7.2020</Card.Meta>
                <Card.Description>
                    <p>{content}</p>
                    <Link to='/categories'>Full post</Link>
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
