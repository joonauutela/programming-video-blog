import React from 'react'
import moment from 'moment'

import './Comment.css'

const Comment = ({ comment }) => {

    if (!comment) return null
    return (
        <div className="ui comments">
            <div className="comment">
                <div className="content">
                    <a className="author">{comment.username}</a>
                    <div className="metadata">
                        <span className="date">{moment(comment.createdAt).fromNow()}</span>
                    </div>
                    <div className="text">
                        {comment.body}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment