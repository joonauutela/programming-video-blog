import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import { Button, Icon, Label } from 'semantic-ui-react'
import { LIKE_POST_QUERY, FETCH_POSTS_QUERY } from '.././queries'

const LikeButton = ({ user, id, likes }) => {
    const [liked, setLiked] = useState(false)

    useEffect(() => {
        if (user && likes.find(like => like.username === user.username)) {
            setLiked(true)
        } else setLiked(false)
    }, [user, likes])

    const [like] = useMutation(LIKE_POST_QUERY, {
        refetchQueries: [{ query: FETCH_POSTS_QUERY }],
        onError(err) {
            //TODO: 'You need to be logged in to like.'-notification here!
            console.log(err)
        }
    })
    const likePost = () => {
        like({ variables: { id } }).
            then(setLiked(true))
    }

    const likeButton = user ? (
        liked ? (
            <Button color="teal">
                <Icon name="heart" />
            </Button>
        ) : (
                <Button color="teal" basic>
                    <Icon name="heart" />
                </Button>
            )
    ) : (
            <Button as={Link} to="/login" color="teal" basic>
                <Icon name="heart" />
            </Button>
        )

    return (
        <Button as="div" labelPosition="right" onClick={likePost}>
            {likeButton}
            <Label basic color="teal" pointing="left">
                {likes.length}
            </Label>
        </Button>
    )

}

export default LikeButton