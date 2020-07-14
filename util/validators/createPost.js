module.exports.validateCreatePostInput = (title, link, content) => {
    const errors = {}
    if (title.trim() === '') {
        errors.title = 'Title must not be empty'
    }
    if (link.trim() === '') {
        errors.link = 'Link must not be empty'
    }
    if (content.trim() === '') {
        errors.content = 'Content must not be empty'
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}