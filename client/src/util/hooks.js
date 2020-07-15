import { useState } from 'react'

export const useForm = (callback, initialState = {}) => {
    const [values, setValues] = useState(initialState)

    const onChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        callback()
    }
    return {
        onChange,
        onSubmit,
        values
    }
}

export const getVideoID = (link) => {
    return link.split('=')[1]
}

export const getDate = (unmodifiedDate) => {
    // Modify the date from 'YYYY-MM-DDTXX:XX:XX.XXXX' to 'DD.MM.YYYY'
    const dateArray = unmodifiedDate.split('T')[0].split('-')
    return `${dateArray[2]}.${dateArray[1]}.${dateArray[0]}`
}