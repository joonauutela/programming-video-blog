module.exports.validateCreateCommentInput = (body) => {
    const errors = {}

    if (body.trim() === '') {
        errors.body = 'Comment must not be empty'
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}