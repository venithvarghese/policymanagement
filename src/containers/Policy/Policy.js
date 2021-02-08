import React, { useState } from 'react';
import PolicyPurchaseForm from './PolicyPurchaseForm';
import PolicyList  from './PolicyList';


const Policy = () => {


    const [policyDetails, setPolicyDetails] = useState([]);

    const policyHandler = policydata => {
        setPolicyDetails(prevPolicyData => [
        ...prevPolicyData,
        { id: Math.random().toString(), ...policydata }
      ]);
    };




    return (
        <div className="App">
          <PolicyPurchaseForm onAddPolicy={policyHandler} />
              <section>
                <PolicyList policydata={policyDetails} />
             </section>
        </div>
      );
    };


    export  default Policy;