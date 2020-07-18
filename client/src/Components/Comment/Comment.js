import React from 'react'
import './Comment.css'

const Comment = () => {
    return (
        <div class="ui comments">
            <div class="comment">
                <div class="content">
                    <a class="author">Tom Lukic</a>
                    <div class="metadata">
                        <span class="date">Today at 5:42PM</span>
                    </div>
                    <div class="text">
                        This will be great for business reports. I will definitely download this.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment