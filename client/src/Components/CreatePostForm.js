import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useMutation } from '@apollo/react-hooks'
import { withRouter } from 'react-router-dom'
import { CREATE_POST_MUTATION, FETCH_POSTS_QUERY } from '../queries'

import { useForm } from '../util/hooks'

const CreatePostForm = (props) => {
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
            const graphqlErrors = err.graphQLErrors[0].extensions.exception.errors
            if (graphqlErrors) {
                setErrors(graphqlErrors)
            } else {
                setErrors({})
            }
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
                    error={errors.title ? true : false}
                    onChange={onChange}
                />
                <Form.Input
                    label='Youtube link'
                    placeholder='Video link here..'
                    name='link'
                    type='link'
                    value={values.link}
                    error={errors.link ? true : false}
                    onChange={onChange}
                />
                <Form.TextArea
                    label="Content"
                    placeholder="Content.."
                    name="content"
                    type='content'
                    value={values.content}
                    error={errors.content ? true : false}
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