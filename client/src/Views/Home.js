import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Card, Icon } from 'semantic-ui-react'
import gql from 'graphql-tag'

const Home = () => {
    const { loading, data } = useQuery(FETCH_POSTS_QUERY)

    if (loading) {
        return <h1>loading</h1>
    }
    return (
        <div>
            <h1>All posts</h1>

            <Card fluid color='red'>
                <Card.Content>
                    <Card.Header>Cool Reactjs video</Card.Header>
                    <Card.Meta>Posted 1.7.2020</Card.Meta>
                    <Card.Description>
                        Daniel is a comedian living in Nashville.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a style={{ "fontSize": "1.2rem" }}>
                        10 likes
                    </a>
                    <Icon name='like' color='green' style={{ "paddingLeft": "1%" }} size="large" />
                </Card.Content>
            </Card>


            <Card fluid color='orange' header='Option 2' />
            <Card fluid color='yellow' header='Option 3' />

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