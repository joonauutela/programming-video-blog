import React, { useContext } from 'react'
import { Card, Icon, Button, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { getVideoID, getDate } from '../../util/hooks'
import { AuthContext } from '../../context/auth';

import LikeButton from '../LikeButton'
import DeleteButton from '../DeleteButton/DeletePost'

import './Post.css'

const Post = ({ title, content, link, likes, id, createdAt, postedBy }) => {

    const { user } = useContext(AuthContext)

    return (
        <Card fluid color='teal'>
            <Card.Content>
                <Card.Header className='post-header'>{title}</Card.Header>
                <Card.Meta className='post-info'>Posted {getDate(createdAt)} By <Link className='post-user' to='/'>{postedBy}</Link></Card.Meta>
                <div className='post-image-container'>
                    <Link to={`/post/${id}`}><img src={`https://i.ytimg.com/vi/${getVideoID(link)}/maxresdefault.jpg`} className='post-image' /></Link>
                </div>
                <Card.Description>
                    <p className='post-content'>{content}</p>
                    <Link to={`/post/${id}`}>Full post</Link>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <LikeButton id={id} likes={likes} user={user} />
                <Link to={`/post/${id}`}>
                    <Button as="div" labelPosition="right">
                        <Button color="blue" basic>
                            <Icon name="comments" />
                        </Button>
                        <Label basic color="blue" pointing="left">
                            0
                    </Label>
                    </Button>
                </Link>

                {user && user.username === postedBy && (
                    <DeleteButton id={id} />
                )}
            </Card.Content>
        </Card >
    )
}

export default Post
