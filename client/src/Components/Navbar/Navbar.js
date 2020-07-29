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
        <Menu pointing secondary size="large" color="teal" className="menu-container">
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
                name='posts'
                active={activeItem === 'posts'}
                onClick={handleItemClick}
                as={Link}
                to='/posts'
            />
            <Menu.Menu position='right' style={{ 'paddingRight': '2%' }}>
                <div className="ui simple dropdown item">
                    {user.username}
                    <i className="dropdown icon"></i>
                    <div className="menu" style={{ 'margin': '10px !important' }}>
                        <Link className="item" to={`/user`}>Profile</Link>
                        <Link className="item" to={'/create-post'}>Create Post</Link>
                        <Link className="item" to={'/'} onClick={logout}>Logout</Link>
                    </div>
                </div>
            </Menu.Menu>
        </Menu>
    ) : (
            <Menu pointing secondary size="large" color="teal" className="menu-container">
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
                    name='posts'
                    active={activeItem === 'posts'}
                    onClick={handleItemClick}
                    as={Link}
                    to='/posts'
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