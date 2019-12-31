import React from 'react';
import {NavLink} from 'react-router-dom';

import  './nav-bar.css';

const NavBar = () => {
    return (
        <nav className='nav'>
            <ul>
                <li className='item'>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                <li className='item'>
                    <NavLink to="/dialogs">Messages</NavLink>
                </li>
                <li className='item'>
                    <NavLink to="/users">Users</NavLink>
                </li>
                <li className='item'>
                    <a href="">Settings</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;