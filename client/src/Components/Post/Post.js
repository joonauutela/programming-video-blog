import React, { useContext } from 'react'
import { Icon, Button, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { getVideoID, getDate } from '../../util/hooks'
import { AuthContext } from '../../context/auth'

import LikeButton from '../LikeButton'
import DeleteButton from '../DeleteButton/DeletePost'

import './Post.css'

const Post = ({ title, categories, content, link, likes, id, createdAt, postedBy, comments }) => {

    const { user } = useContext(AuthContext)

    return (
        <>
            <h2 className="post-header">{title}</h2>
            {categories.map(category =>
                <Label className="tag-container" key={category}>
                    {category}
                    <Icon name="tags" className="tag-icon" />
                </Label>
            )}
            <p className="post-info">
                Posted {getDate(createdAt)} By <Link className='post-user' to='/'>{postedBy}</Link>
            </p>
            <div className='post-image-container'>
                <Link to={`/post/${id}`}><img src={`https://i.ytimg.com/vi/${getVideoID(link)}/maxresdefault.jpg`} className='post-image' /></Link>
            </div>
            <p className='post-content'>{content}</p>
            <Link to={`/post/${id}`}>Full post</Link>
            <div className="buttons-container">
                <LikeButton id={id} likes={likes} user={user} />
                <Link to={`/post/${id}`}>
                    <Button as="div" labelPosition="right">
                        <Button color="blue" basic>
                            <Icon name="comments" />
                        </Button>
                        <Label basic color="blue" pointing="left">
                            {comments}
                        </Label>
                    </Button>
                </Link>

                {user && user.username === postedBy && (
                    <DeleteButton id={id} />
                )}
            </div>

            <hr />
        </>
    )
}

export default Post
