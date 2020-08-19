import React, { useContext, useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useMutation } from '@apollo/react-hooks'
import { LOGIN_USER } from '../queries'
import { withRouter } from 'react-router-dom'

import { AuthContext } from '../context/auth'
import { NotificationContext } from '../context/notification'
import { useForm } from '../util/hooks'

const LoginForm = (props) => {
    const authContext = useContext(AuthContext)
    const notificationContext = useContext(NotificationContext)
    const [errors, setErrors] = useState({})

    const { onChange, onSubmit, values } = useForm(loginUserCallback, {
        username: '',
        password: ''
    })

    const [loginUser, { loading }] = useMutation(LOGIN_USER, {
        update(_, { data: { login: userData } }) {
            console.log(userData)
            authContext.login(userData)
            props.history.push('/')
            notificationContext.addNotification({ message: 'Logged in succesfully', type: 'success' })
        },
        onError(err) {
            setErrors(err.graphQLErrors[0].extensions.exception.errors)
        },
        variables: values
    })

    function loginUserCallback() {
        loginUser()
    }

    return (
        <div style={{ "width": "50%", "margin": "auto" }}>
            {Object.keys(errors).length > 0 &&
                <div className='ui error message'>
                    <ul>
                        {Object.values(errors).map(value => (
                            <li key={value}>{value}</li>
                        ))}
                    </ul>
                </div>
            }
            <Form onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>
                <h1>Login</h1>
                <Form.Input
                    label='Username'
                    placeholder='Username..'
                    name='username'
                    type='username'
                    value={values.username}
                    error={errors.username ? true : false}
                    onChange={onChange}
                />
                <Form.Input
                    label='Password'
                    placeholder='Password..'
                    name='password'
                    type='password'
                    value={values.password}
                    error={errors.password ? true : false}
                    onChange={onChange}
                />
                <Button type='submit' primary>
                    Register
                </Button>
            </Form>
        </div>
    )
}

export default withRouter(LoginForm)