import React, { Component } from 'react';
import HomeLayout from '../../UI_Components/HomeLayout/HomeLayout';
import Policy from '../../containers/Policy/Policy';



class Home extends Component {
  render() {
    return (
      <div>
       <HomeLayout/> 
        
       <Policy/>
      </div>
      
      
    );
  }
}

export default Home;
