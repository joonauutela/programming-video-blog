import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'
import { useMutation } from '@apollo/react-hooks'
import { CREATE_COMMENT_MUTATION } from '../../queries'

const CreateCommentForm = ({ postId }) => {
    const [comment, setComment] = useState('')

    const [submitComment] = useMutation(CREATE_COMMENT_MUTATION, {
        update() {
            setComment('')
        },
        variables: {
            postId,
            body: comment
        }
    })

    return (
        <div>
            <Form className="ui reply form">
                <Form.TextArea
                    className="field"
                    type="text"
                    placeholder="Comment.."
                    name="comment"
                    rows="5"
                    value={comment}
                    onChange={event => setComment(event.target.value)}
                />
                <button
                    type="submit"
                    className="ui blue labeled submit icon button"
                    disabled={comment.trim() === ''}
                    onClick={submitComment}
                >
                    <i className="icon edit"></i>
                        Submit
                      </button>
            </Form>
        </div>
    )
}

export default CreateCommentForm