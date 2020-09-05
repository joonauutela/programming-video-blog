import React, { useState } from 'react'
import { Button, Confirm, Icon } from 'semantic-ui-react'
import { useMutation } from '@apollo/react-hooks'
import { DELETE_COMMENT_MUTATION, FETCH_POST_QUERY } from '../../queries'

const DeleteComment = ({ postId, commentId }) => {
    const [confirmOpen, setConfirmOpen] = useState(false)

    const [deleteComment] = useMutation(DELETE_COMMENT_MUTATION, {
        update() {
            setConfirmOpen(false)
        },
        refetchQueries: [{ query: FETCH_POST_QUERY, variables: { id: postId } }],
        variables: {
            postId,
            commentId
        }
    })
    return (
        <>
            <Button
                as="div"
                color="red"
                style={{ 'padding': '0.7rem' }}
                floated="right"
                onClick={() => setConfirmOpen(true)} >
                <Icon name="trash" style={{ 'margin': '0' }} />
            </Button>
            <Confirm
                open={confirmOpen}
                onCancel={() => setConfirmOpen(false)}
                onConfirm={deleteComment}
            />
        </>
    )
}

export default DeleteComment