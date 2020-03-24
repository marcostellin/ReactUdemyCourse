import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleButton from '../../ToggleButton/ToggleButton';
import Logo from '../../Logo/Logo';

import classes from './Toolbar.css';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <ToggleButton clicked={props.openSideDrawer}>Hamburger</ToggleButton>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;