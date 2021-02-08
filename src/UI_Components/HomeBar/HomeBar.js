import React from 'react';
import MyLogo from  '../Logo/Logo';
import styles from '../Toolbar/toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const HomeBar = ( props ) => (
    <header className={styles.Toolbar}>
        <div className={styles.Logo}>
            <MyLogo />
        </div>
        <nav className={styles.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default HomeBar;