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
        <div class="main-container">
            <div className="posts-hero-container">
                <Header
                    as="h1"
                    content="Website name"
                    inverted
                    style={{
                        fontSize: "4em",
                        fontWeight: "normal",
                    }}
                />
                <Header
                    as="h2"
                    content="Find unpopular programming videos that deserve more attention"
                    inverted
                    style={{
                        fontSize: "1.7em",
                        fontWeight: "normal",
                        marginTop: "1.5em"
                    }}
                />
            </div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={12} className="section-container" >
                        <Header as="h1">
                            Random picks
                            </Header>
                        <img src="https://i.ytimg.com/vi/0-S5a0eXPoc/maxresdefault.jpg" className="posts-header-img" />
                        <img src="https://i.ytimg.com/vi/OU55PWXm2rg/maxresdefault.jpg" className="posts-header-img" />
                        <img src="https://i.ytimg.com/vi/Ol2pXWQWhbg/maxresdefault.jpg" className="posts-header-img" />
                        <br />
                        <br />
                        <hr />
                        <div>
                            <Header as="h1" style={{ fontSize: "2.5em" }}>
                                What is this all about?
                            </Header>
                            <p style={{ fontSize: "1.5em" }}>
                                Posted by finnishr 25.20.2020
                            </p>
                            <img src="https://i.ytimg.com/vi/Ol2pXWQWhbg/maxresdefault.jpg" className="img-container" />
                            <p style={{ fontSize: "1.5em" }}>
                                Lorem ipsum moi miten menee moi miten menee moi miten menee moi miten menee moi miten menee...
                            </p>
                            <p>Read more</p>
                            <br />
                            <br />
                            <hr />
                        </div>
                        <div>
                            <Header as="h1" style={{ fontSize: "2.5em" }}>
                                What is this all about?
                            </Header>
                            <p style={{ fontSize: "1.5em" }}>
                                Posted by finnishr 25.20.2020
                            </p>
                            <img src="https://i.ytimg.com/vi/Ol2pXWQWhbg/maxresdefault.jpg" className="img-container" />
                            <p style={{ fontSize: "1.5em" }}>
                                Lorem ipsum moi miten menee moi miten menee moi miten menee moi miten menee moi miten menee...
                            </p>
                            <p>Read more</p>

                            <br />
                            <br />
                            <hr />
                        </div>
                        <div>
                            <Header as="h1" style={{ fontSize: "2.5em" }}>
                                What is this all about?
                            </Header>
                            <p style={{ fontSize: "1.5em" }}>
                                Posted by finnishr 25.20.2020
                            </p>
                            <img src="https://i.ytimg.com/vi/Ol2pXWQWhbg/maxresdefault.jpg" className="img-container" />
                            <p style={{ fontSize: "1.5em" }}>
                                Lorem ipsum moi miten menee moi miten menee moi miten menee moi miten menee moi miten menee...
                            </p>
                            <p>Read more</p>
                            <br />
                            <br />
                            <hr />
                        </div>

                    </Grid.Column>
                    <Grid.Column floated="right" width={4} className="sidebar-container">
                        <SelectCategory category={category} setCategory={setCategory} />
                        <SelectFilter filter={filter} setFilter={setFilter} />
                    </Grid.Column>
                </Grid.Row>

            </Grid>

            <div className='select-wrapper'>
                <SelectCategory category={category} setCategory={setCategory} />
                <SelectFilter filter={filter} setFilter={setFilter} />
            </div>
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
        </div >
    )
}

export default AllPosts