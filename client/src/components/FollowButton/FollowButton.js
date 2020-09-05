import React, { useState, useEffect, useContext } from 'react'
import { Button } from 'semantic-ui-react'
import { AuthContext } from '../../context/auth'
import { useMutation } from '@apollo/react-hooks'
import { FOLLOW_MUTATION, FETCH_USER_QUERY } from '../../queries'

const FollowButton = ({ userToFollow }) => {
    const [isFollowed, setIsFollowed] = useState(false)
    const { user } = useContext(AuthContext)

    useEffect(() => {
        if (userToFollow && userToFollow.following.find(follower => follower.username === user.username)) {
            setIsFollowed(true)
        } else {
            setIsFollowed(false)
        }
    }, [user])

    const [follow] = useMutation(FOLLOW_MUTATION, {
        refetchQueries: [{ query: FETCH_USER_QUERY, variables: { username: userToFollow.username } }],
        onError(err) {
            //TODO: 'You need to be logged in to follow.'-notification here!
            console.log(err)
        }
    })
    const followUser = () => {
        follow({ variables: { usernameToFollow: userToFollow.username } }).
            then(setIsFollowed(!isFollowed))
    }

    if (user.username === userToFollow.username) return null

    else if (isFollowed) {
        return <Button primary onClick={followUser}>Unfollow</Button>
    }
    else {
        return <Button primary onClick={followUser}>Follow</Button>
    }
}

export default FollowButton