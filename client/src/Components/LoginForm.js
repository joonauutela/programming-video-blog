import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useMutation } from '@apollo/react-hooks'
import { REGISTER_USER } from '../queries'
import { withRouter } from 'react-router-dom'

const LoginForm = (props) => {
    const [errors, setErrors] = useState({})
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const onChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value })
    }

    const [addUser, { loading }] = useMutation(REGISTER_USER, {
        update(_, result) {
            props.history.push('/')
        },
        onError(err) {
            console.log(err.graphQLErrors[0].extensions.exception.errors)
            setErrors(err.graphQLErrors[0].extensions.exception.errors)
        },
        variables: values
    })

    const onSubmit = (event) => {
        event.preventDefault()
        addUser()
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