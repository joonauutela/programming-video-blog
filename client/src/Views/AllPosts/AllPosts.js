import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { FETCH_POSTS_QUERY } from '../../queries'
import { filterPosts } from '../../util/hooks'
import { Grid, Header, Search } from 'semantic-ui-react'

import Post from '../../components/Post/Post'
import Loader from '../../components/Loader'
import SelectCategory from '../../components/Selects/SelectCategory'
import SelectFilter from '../../components/Selects/SelectFilter'

import './AllPosts.css'

const AllPosts = () => {
    const [category, setCategory] = useState('')
    const [filter, setFilter] = useState('mostRecent')

    const [filteredPosts, setFilteredPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const { data } = useQuery(FETCH_POSTS_QUERY)

    useEffect(() => {
        if (data) {
            const allPosts = data.getPosts
            setFilteredPosts(filterPosts(allPosts, category, filter))
            setIsLoading(false)
        }
    }, [data, category, filter])

    if (isLoading) {
        return <Loader />
    }
    return (
        <>
            <div className="posts-hero-container">
            </div>
            <div class="main-container">
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={12} className="section-container" >
                            <div>
                                {filteredPosts.map(post => {
                                    return <Post
                                        key={post.id}
                                        title={post.title}
                                        link={post.link}
                                        likes={post.likes}
                                        content={post.content}
                                        createdAt={post.createdAt}
                                        postedBy={post.username}
                                        id={post.id}
                                        className="post"
                                    />
                                })}
                            </div>

                        </Grid.Column>
                        <Grid.Column floated="right" width={4} className="sidebar-container">
                            <SelectCategory category={category} setCategory={setCategory} />
                            <SelectFilter filter={filter} setFilter={setFilter} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div >
        </>
    )
}

export default AllPosts