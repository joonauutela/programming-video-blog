module.exports.validateCreatePostInput = (title, link, content, categories) => {
    const errors = {}

    // Title --
    if (title.trim() === '') {
        errors.title = 'Title must not be empty'
    }
    if (title.length > 35) {
        errors.title = 'Title length is too long'
    }
    // Link --
    if (link.trim() === '') {
        errors.link = 'Link must not be empty'
    }
    // eslint-disable-next-line 
    const regEx = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/
    if (!link.match(regEx) && !errors.link) {
        errors.link = 'Please provide a valid YouTube-link'
    }
    // Content -- 
    if (content.trim() === '') {
        errors.content = 'Content must not be empty'
    }
    if (content.length > 255) {
        errors.content = 'Content length is too long'
    }
    // Categories --
    if (categories.length === 0) {
        errors.categories = 'Add at least one category'
    }
    if (categories.length > 3) {
        errors.categories = 'Too many categories'
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}