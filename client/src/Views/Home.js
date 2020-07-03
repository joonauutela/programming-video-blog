import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { FETCH_POSTS_QUERY } from '../queries'
import Post from '../components/Post'
import { Grid } from 'semantic-ui-react'

const Home = () => {
    const { loading, data } = useQuery(FETCH_POSTS_QUERY)
    if (loading) {
        return <h1>loading</h1>
    }
    return (
        <div>
            <h1>All posts</h1>
            <Grid divided='vertically'>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        {data.getPosts.map((post, index) => {
                            if (!(index % 2)) {
                                return <Post
                                    key={post.id}
                                    title={post.title}
                                    link={post.link}
                                    likes={post.likes}
                                    content={post.content}
                                    id={post.id}
                                />
                            }
                            return null
                        })}
                    </Grid.Column>
                    <Grid.Column>
                        {data.getPosts.map((post, index) => {
                            if (index % 2) {
                                return <Post
                                    key={post.id}
                                    title={post.title}
                                    link={post.link}
                                    likes={post.likes}
                                    content={post.content}
                                    id={post.id}
                                />
                            }
                            return null
                        })}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div >
    )
}

export default Home