import React from 'react'
import { Search } from 'semantic-ui-react'

import './Select.css'

const SelectCategory = ({ category, setCategory }) => {

    return (
        <div>
            <div className="filters">
                <h3 className="filter-categories-header">Categories</h3>
                <Search
                    input={{ icon: 'search', iconPosition: 'left' }}
                    open={false}
                    onSearchChange={event => setCategory(event.target.value.toLowerCase())}
                />
                <ul>
                    <li className={category === '' ? 'filter-button-active' : 'filter-button'} onClick={() => setCategory('')}>All</li>
                    <li className={category === 'react' ? 'filter-button-active' : 'filter-button'} onClick={() => setCategory('react')}>React</li>
                    <li className={category === 'css' ? 'filter-button-active' : 'filter-button'} onClick={() => setCategory('css')}>CSS</li>
                    <li className={category === 'html' ? 'filter-button-active' : 'filter-button'} onClick={() => setCategory('html')}>HTML</li>
                    <li className={category === 'python' ? 'filter-button-active' : 'filter-button'} onClick={() => setCategory('python')}>Python</li>
                </ul>
            </div>
        </div>
    )
}

export default SelectCategory