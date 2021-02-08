import React, { Component } from 'react';
import styles from './layout.module.css';
import Toolbar from '../Toolbar/Toolbar';
import aux from '../../hoc/Auxiliary';

class Layout extends Component {

 

    render () {
        return (
                <aux>
                <Toolbar/>
                  <main className={styles.Content}>
                    {this.props.children}
                </main>
                </aux>
            
        )
    }
}

export default Layout;