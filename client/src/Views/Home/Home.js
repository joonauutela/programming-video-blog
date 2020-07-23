import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { FETCH_POSTS_QUERY } from '../../queries'
import { filterPosts } from '../../util/hooks'

import Post from '../../components/Post/Post'
import Loader from '../../components/Loader'
import SelectCategory from '../../components/Selects/SelectCategory'
import SelectFilter from '../../components/Selects/SelectFilter'

import './Home.css'

const Home = () => {
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
        <div className='posts-container'>
            <h1 className='posts-header'>Posts</h1>
            <div className='select-wrapper'>
                {console.log(filteredPosts)}
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
                        id={post.id}
                    />
                })}
            </div>
        </div >
    )
}

export default Home