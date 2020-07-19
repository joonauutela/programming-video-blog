import React from 'react'

import './Select.css'

const SelectFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <h3 className='filter-categories-header'>Filter by</h3>
            <div className='filters'>
                <button className={filter === 'mostRecent' ? 'filter-button-active' : 'filter-button'} onClick={() => setFilter('mostRecent')}>Most recent</button>
                <button className={filter === 'comments' ? 'filter-button-active' : 'filter-button'} onClick={() => setFilter('comments')}>Comments</button>
                <button className={filter === 'likes' ? 'filter-button-active' : 'filter-button'} onClick={() => setFilter('likes')}>Likes</button>
            </div>
        </div>
    )
}

export default SelectFilter