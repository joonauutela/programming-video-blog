import React, { useContext, useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth'

import './Navbar.css'

const Navbar = () => {

    const { user, logout } = useContext(AuthContext)
    const pathname = window.location.pathname

    const path = pathname === '/' ? 'home' : pathname.substr(1)
    const [activeItem, setActiveItem] = useState(path)

    const handleItemClick = (e, { name }) => setActiveItem(name)

    const menuBar = user ? (
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
                    name={user.username}
                    active={activeItem === 'login'}
                    onClick={handleItemClick}
                    as={Link}
                    to={`/users/${user.username}`}
                />
                <Menu.Item
                    className='menu-item'
                    name='logout'
                    active={activeItem === 'logout'}
                    onClick={handleItemClick}
                    as={Link}
                    to='/logout'
                />
            </Menu.Menu>
        </Menu>
    ) : (
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

    return menuBar
}

export default Navbar