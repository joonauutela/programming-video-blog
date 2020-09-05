import React from 'react'

import './Tag.css'

const Tag = ({ category, removeCategory }) => {
    return (
        <span className="tag">
            <span className="tag-title">{category}</span>
            <span className="tag-close-icon"
                onClick={() => removeCategory(category)}
            >
                x
						</span>
        </span>
    )
}

export default Tag