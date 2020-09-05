import React, { useState } from 'react'
import { Button, Confirm, Icon } from 'semantic-ui-react'
import { useMutation } from '@apollo/react-hooks'
import { DELETE_POST_MUTATION, FETCH_POSTS_QUERY } from '../../queries'

const DeletePost = ({ id }) => {
    const [confirmOpen, setConfirmOpen] = useState(false)

    const [deletePost] = useMutation(DELETE_POST_MUTATION, {
        update() {
            setConfirmOpen(false)
        },
        refetchQueries: [{ query: FETCH_POSTS_QUERY }],
        variables: {
            id
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
                onConfirm={deletePost}
            />
        </>
    )
}

export default DeletePost