import React from 'react';

import styles from './navigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ( props ) => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/Policy" exact>Policy</NavigationItem>
        <NavigationItem link="/Update" exact>Profile</NavigationItem>
     </ul>
);

export default navigationItems;
 
