import React from 'react';

import classes from './PolicyList.css';

const PolicyList = props => {
  return (
    <section className={classes.ingredient}>
      <h2>My Policies</h2>
     <table >
         <th>Type </th><th>Amount</th><th>Activedate</th><th>duration</th>
        {props.policydata.map(policylist => (
          <tr key={policylist.id} >
          
            <td>{policylist.policytype}</td>
            <td>{policylist.amount}</td>
            <td>{policylist.activedate}</td>
            <td>{policylist.policyduration}</td>
            </tr>
         
        ))}
        
      </table>
    </section>
  );
};

export default PolicyList;
