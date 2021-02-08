import React, { Component } from 'react';
import HomeLayout from '../../UI_Components/HomeLayout/HomeLayout';
import UpdateForm from './UpdateForm';



class Home extends Component {
  render() {
    return (
      <div>
       <HomeLayout/> 
        
       <UpdateForm/>
      </div>
      
      
    );
  }
}

export default Home;
