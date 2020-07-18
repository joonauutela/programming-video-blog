import React from 'react'

const CreateCommentForm = () => {
    return (
        <div>
            <form class="ui reply form">
                <div class="field">
                    <textarea></textarea>
                </div>
                <div class="ui blue labeled submit icon button">
                    <i class="icon edit"></i> Add Comment
            </div>
            </form>
        </div>
    )
}

export default CreateCommentForm