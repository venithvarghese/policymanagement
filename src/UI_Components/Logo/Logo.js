import React from 'react';

import Logo from '../images/logo.png';
import classes from './Logo.css';

const MyLogo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={Logo} alt="PolicyWorld" />
    </div>
);

export default MyLogo;