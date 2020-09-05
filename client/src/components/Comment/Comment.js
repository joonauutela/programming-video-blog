import React from 'react'
import moment from 'moment'
import DeleteButton from '../DeleteButton/DeleteComment'

import './Comment.css'

const Comment = ({ comment, user, postId }) => {

    if (!comment) return null
    return (
        <div className="ui comments">
            <div className="comment">
                <div className="content">
                    <a className="author">{comment.username}</a>
                    <div className="metadata">
                        <span className="date">{moment(comment.createdAt).fromNow()}</span>
                    </div>
                    {user && comment.username === user.username && (
                        <DeleteButton postId={postId} commentId={comment.id} />
                    )}
                    <div className="text">
                        {comment.body}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment