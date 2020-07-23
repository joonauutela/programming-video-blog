import React from 'react'

import './Select.css'

const SelectCategory = ({ category, setCategory }) => {
    return (
        <div>
            <h3 className='filter-categories-header'>Categories</h3>
            <div className='filters'>
                <button className={category === '' ? 'filter-button-active' : 'filter-button'} onClick={() => setCategory('')}>All</button>
                <button className={category === 'react' ? 'filter-button-active' : 'filter-button'} onClick={() => setCategory('react')}>React</button>
                <button className={category === 'css' ? 'filter-button-active' : 'filter-button'} onClick={() => setCategory('css')}>CSS</button>
                <button className={category === 'html' ? 'filter-button-active' : 'filter-button'} onClick={() => setCategory('html')}>HTML</button>
                <button className={category === 'python' ? 'filter-button-active' : 'filter-button'} onClick={() => setCategory('python')}>Python</button>
            </div>
        </div>
    )
}

export default SelectCategory