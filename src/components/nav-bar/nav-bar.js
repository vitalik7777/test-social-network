import React from 'react';

import classes from './nav-bar.module.css';

const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={classes.item}>
                    <a href="">Profile</a>
                </li>
                <li className={classes.item}>
                    <a href="">Messages</a>
                </li>
                <li className={classes.item}>
                    <a href="">News</a>
                </li>
                <li className={classes.item}>
                    <a href="">Settings</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;