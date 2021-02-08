import React, { Component } from 'react';
import classes from './Layout.css';
import Toolbar from '../Toolbar/Toolbar';
import aux from '../../hoc/Auxiliary';

class Layout extends Component {

 

    render () {
        return (
                <aux>
                <Toolbar/>
                  <main className={classes.Content}>
                    {this.props.children}
                </main>
                </aux>
            
        )
    }
}

export default Layout;