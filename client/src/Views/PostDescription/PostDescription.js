import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { getDate } from '../../util/hooks'
import { FETCH_POST_QUERY } from '../../queries'

import YoutubePlayer from '../../components/YoutubePlayer'
import Comment from '../../components/Comment/Comment'
import CreateCommentForm from '../../components/Comment/CreateCommentForm'
import Loader from '../../components/Loader'

import './PostDescription.css'

const PostDescription = () => {
    const { id } = useParams()
    const { data, loading } = useQuery(FETCH_POST_QUERY, {
        variables: { id }
    })
    if (loading) {
        return <Loader />
    }
    return (
        <div className="post-container">
            <div className="post-inner-container">
                <h1>{data.getPost.title}</h1>
                <p className="post-info">Post made by Joona Uutela at {getDate(data.getPost.createdAt)}</p>
                <YoutubePlayer className="video-player" link={data.getPost.link} />
                <br />
                <hr />
                <h3 className="post-content-header">User description</h3>
                <p className="post-content">{data.getPost.content}</p>
                <br />
                <hr />
            </div>
            <div className="comment-container">
                <Comment />
                <CreateCommentForm />
            </div>
        </div>
    )
}

export default PostDescription