import React, { Component } from 'react';
import styles from '../Layout/layout.module.css';
import Homebar from '../HomeBar/HomeBar';
import aux from '../../hoc/Auxiliary';

class HomeLayout extends Component {

 

    render () {
        return (
                <aux>
                <Homebar/>
                  <main className={styles.Content}>
                    {this.props.children}
                </main>
                </aux>
            
        )
    }
}

export default HomeLayout;