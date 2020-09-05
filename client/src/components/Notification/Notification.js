import React, { useContext } from 'react'
import { Container } from 'semantic-ui-react'
import { NotificationContext } from '../../context/notification'
import { Message } from 'semantic-ui-react'

import './Notification.css'

const Notification = () => {
    const { notification } = useContext(NotificationContext)

    if (!notification) return null

    switch (notification.type) {
        case 'success':
            return (
                <Container>
                    <Message positive>
                        <p className="notification-text">{notification.message}</p>
                    </Message>
                </Container>
            )
        default:
            return null
    }
}

export default Notification
