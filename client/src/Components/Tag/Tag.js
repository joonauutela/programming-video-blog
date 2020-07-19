import React from 'react'

const Tag = () => {
    return (
        <span className="tag">
            <span className='tag-title'>Tag</span>
            <span className='tag-close-icon'
                onClick={() => console.log('removed tag')}
            >
                x
						</span>
        </span>
    )
}

export default Tag