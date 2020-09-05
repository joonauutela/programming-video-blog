import React, { useReducer, createContext } from 'react'

const NotificationContext = createContext({
    notification: { message: '', type: null },
    // eslint-disable-next-line no-unused-vars
    addNotification: (notification) => { },
    clearNotification: () => { }
})

function notificationReducer(state, action) {
    switch (action.type) {
        case 'ADD_NOTIFICATION':
            return {
                ...state,
                notification: {
                    message: action.payload.message,
                    type: action.payload.type
                }
            }
        case 'CLEAR_NOTIFICATION':
            return {
                ...state,
                notification: {
                    message: '',
                    type: null
                }
            }
        default:
            return state
    }
}

function NotificationProvider(props) {
    const [state, dispatch] = useReducer(notificationReducer, { message: '', type: null })

    const addNotification = (notification) => {
        console.log('lol')
        dispatch({
            type: 'ADD_NOTIFICATION',
            payload: notification
        })
        setTimeout(() => {
            console.log('lolo9')
            dispatch({ type: 'CLEAR_NOTIFICATION' })
        }, 4000)
    }

    const clearNotification = () => {
        dispatch({ type: 'CLEAR_NOTIFICATION' })
    }

    return (
        <NotificationContext.Provider
            value={{ notification: state.notification, addNotification, clearNotification }}
            {...props}
        />
    )
}

export { NotificationContext, NotificationProvider }