import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Post = ({ title, content, link, likes }) => {
    return (
        <Card fluid color='red'>
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
                <Icon name='like' color='green' style={{ "paddingLeft": "1%" }} size="large" />
            </Card.Content>
        </Card>

    )
}

export default Post
