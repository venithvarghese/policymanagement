import React from 'react';
import MyLogo from  '../Logo/Logo';
import classes from '../Toolbar/Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const HomeBar = ( props ) => (
    <header className={classes.Toolbar}>
        <div className={classes.Logo}>
            <MyLogo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default HomeBar;