import React from 'react'

import './Select.css'

const SelectFilter = ({ filter, setFilter }) => {
    return (
        <>
            <div className='filters'>
                <h3 className='filter-categories-header'>Filter by</h3>
                <ul>
                    <li className={filter === 'mostRecent' ? 'filter-button-active' : 'filter-button'} onClick={() => setFilter('mostRecent')}>Most recent</li>
                    <li className={filter === 'comments' ? 'filter-button-active' : 'filter-button'} onClick={() => setFilter('comments')}>Comments</li>
                    <li className={filter === 'likes' ? 'filter-button-active' : 'filter-button'} onClick={() => setFilter('likes')}>Likes</li>
                </ul>
            </div>
        </>
    )
}

export default SelectFilter