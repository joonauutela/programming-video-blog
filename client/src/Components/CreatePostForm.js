import React, { useContext, useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useMutation } from '@apollo/react-hooks'
import { LOGIN_USER } from '../queries'
import { withRouter } from 'react-router-dom'
import { CREATE_POST_MUTATION, FETCH_POSTS_QUERY } from '../queries'

import { AuthContext } from '../context/auth'
import { useForm } from '../util/hooks'

const CreatePostForm = (props) => {
    const context = useContext(AuthContext)
    const [errors, setErrors] = useState({})

    const { onChange, onSubmit, values } = useForm(createPostCallback, {
        title: '',
        link: '',
        content: '',
        category: 'node'
    })

    const [createPost, { error }] = useMutation(CREATE_POST_MUTATION, {
        variables: values,
        refetchQueries: [{ query: FETCH_POSTS_QUERY }],
        onError(err) {
            console.log(err.graphQLErrors[0].extensions.exception.errors)
        },
        update(_, result) {
            console.log(result)
            values.title = ''
            values.link = ''
            values.content = ''
        }
    })

    function createPostCallback() {
        createPost()
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
            <Form onSubmit={onSubmit}>
                <h1>Create post</h1>
                <Form.Input
                    label='Title'
                    placeholder='Title..'
                    name='title'
                    type='title'
                    value={values.title}
                    onChange={onChange}
                />
                <Form.Input
                    label='Youtube link'
                    placeholder='Youtube link here..'
                    name='link'
                    type='link'
                    value={values.link}
                    onChange={onChange}
                />
                <Form.TextArea
                    label="Content"
                    placeholder="Content.."
                    name="content"
                    type='content'
                    value={values.content}
                    onChange={onChange}
                    rows="15"
                />
                <Button type='submit' primary>
                    Register
                </Button>
            </Form>
        </div>
    )
}

export default withRouter(CreatePostForm)