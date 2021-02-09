import React, { useState } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import Card from '../UI/Card';
import styles from './policyPurchaseForm.module.css';

const PolicyPurchaseForm = React.memo(props => {

  const [enteredPolicyType,setEnteredPolicyType] =useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredPolicyDuration,setEnteredPolicyDuration]=useState('');
  const [enteredPolicyActiveDate,setEnteredPolicyActiveDate] =useState('');

  var sysdate = function(separator){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (yyyy+separator+mm+separator+dd);
  };
    let valid =false;
  const submitHandler = event => {
    event.preventDefault();
    props.onAddPolicy({ policytype: enteredPolicyType, amount: enteredAmount ,activedate :enteredPolicyActiveDate,policyduration :enteredPolicyDuration});
  };

  return (
    <section className={styles.PolicyPurchaseForm}>
      <Card>
      <div className="col-lg-8 offset-lg-2">
        <form onSubmit={submitHandler}>
         <div className="form-group">
          <label htmlFor="policytype">Policy Type</label>
              <select  className="form-control" id="policytype"   value={enteredPolicyType}
              onChange={event => {
                console.log(event.target.value);
                setEnteredPolicyType(event.target.value);
              }} >
                 <option id=""  value=" "></option>
                  <option id="healthinsurance"  value=" healthinsurance">Health Insurance </option>
                  <option id="lifeinsurance"  value="lifeinsurance">Life   Insurance </option>
                  <option id="motorinsurance"  value="motorinsurance">Motor Insurance </option>
                  <option id="propertyinsurance"  value="propertyinsurance">property Insurance </option>
              </select>
          </div>
         
          <div className="form-group">
            <label htmlFor="amount">Policy Amount</label>
            <input class="form-control"
              type="number"
              id="amount"
              value={enteredAmount}
              onChange={event => {
                console.log(event.target.value);
                setEnteredAmount(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
          <label htmlFor="activedate">Policy Start Date</label> 
          <input  class="form-control" type="date"   placeholder="dd-mm-yyyy" value={enteredPolicyActiveDate}  min={sysdate("-")} max="2030-12-31"
          id ="activedate" onChange={event => {
            console.log(event.target.value);
            setEnteredPolicyActiveDate(event.target.value);
          }}/> 
          </div>
        
          <div className="form-group">
          <label htmlFor="policyduration">Policy Duration</label>
              <select className="form-control" id="policyduration"   value={enteredPolicyDuration}
              onChange={event => {
                console.log(event.target.value);
                setEnteredPolicyDuration(event.target.value);
              }} >
                 <option id=" "  value=" ">  </option>
                  <option id="5"  value=" 5">5 </option>
                  <option id="10"  value="10">10 </option>
                  <option id="15"  value="15">15</option>
                  <option id="20"  value="20">20 </option>
                  <option id="30"  value="30">30 </option>
              </select>
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit" disabled ={valid}>Buy Policy</button>
          </div>
        </form>
        </div>
      </Card>
    </section>
  );
});

export default PolicyPurchaseForm;
