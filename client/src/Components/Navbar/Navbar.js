import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

    const pathname = window.location.pathname
    const path = pathname === '/' ? 'home' : pathname.substr(1)
    const [activeItem, setActiveItem] = useState(path)

    const handleItemClick = (e, { name }) => setActiveItem(name)

    return (
        <Menu pointing secondary size="large" color="teal" style={{ "background": "black" }}>
            <Menu.Item
                className='menu-item'
                name='home'
                active={activeItem === 'home'}
                onClick={handleItemClick}
                as={Link}
                to='/'
            />
            <Menu.Item
                className='menu-item'
                name='categories'
                active={activeItem === 'categories'}
                onClick={handleItemClick}
                as={Link}
                to='/'
            />
            <Menu.Menu position='right'>
                <Menu.Item
                    className='menu-item'
                    name='login'
                    active={activeItem === 'login'}
                    onClick={handleItemClick}
                    as={Link}
                    to='/login'
                />
                <Menu.Item
                    className='menu-item'
                    name='register'
                    active={activeItem === 'register'}
                    onClick={handleItemClick}
                    as={Link}
                    to='/register'
                />
            </Menu.Menu>
        </Menu>
    )
}

export default Navbar