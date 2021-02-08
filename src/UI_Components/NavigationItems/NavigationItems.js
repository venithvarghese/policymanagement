import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ( props ) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/Policy" exact>POLICY</NavigationItem>
        <NavigationItem link="/Update" exact>PROFILE UPDATE</NavigationItem>
     </ul>
);

export default navigationItems;

