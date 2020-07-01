import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import YouTubePlayer from '../components/YoutubePlayer'

const Post = () => {
    return (
        <Card fluid color='red'>
            <Card.Content>
                <Card.Header>Cool Reactjs video</Card.Header>
                <Card.Meta>Posted 1.7.2020</Card.Meta>
                <Card.Description>
                    <YouTubePlayer />
                        Daniel is a comedian living in Nashville.
                        Lorem ipsum
                        lolol
                    </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a style={{ "fontSize": "1.2rem" }}>
                    10 likes
                    </a>
                <Icon name='like' color='green' style={{ "paddingLeft": "1%" }} size="large" />
            </Card.Content>
        </Card>

    )
}

export default Post
