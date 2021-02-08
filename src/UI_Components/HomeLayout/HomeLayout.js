import React, { Component } from 'react';
import classes from '../Layout/Layout.css';
import Homebar from '../HomeBar/HomeBar';
import aux from '../../hoc/Auxiliary';

class HomeLayout extends Component {

 

    render () {
        return (
                <aux>
                <Homebar/>
                  <main className={classes.Content}>
                    {this.props.children}
                </main>
                </aux>
            
        )
    }
}

export default HomeLayout;