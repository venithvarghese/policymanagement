import React, { Component } from 'react';
import axios from 'axios';
import Button from '../../components/Button/Button';
import Spinner from '../../UI_Components/Spinner/Spinner';
import styles from './registration.module.css';
//import axios from '../../../axios-orders';
import Input from '../../components/Input/Input';

class Registration extends Component {
    
    state = {
        userForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true,
                    validName:true
                },
                valid: false,
                touched: false
            },
            username: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your User Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                    
                },
                valid: false,
                touched: false
            },
            address: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Address'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6,
                    maxLength: 6,
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            gender: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: '', displayValue: 'Please select gender'},
                        {value: 'male', displayValue: 'male'},
                        {value: 'female', displayValue: 'female'}
                    ]
                },
                value: '',
                validation: {required: true},
                valid: true
            },
            maritalstatus: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: '', displayValue: 'Please select  marital status'},
                        {value: 'married', displayValue: 'married'},
                        {value: 'divorced', displayValue: 'divorced'},
                        {value: 'single', displayValue: 'single'}
                    ]
                },
                value: '',
                validation: {required: true},
                valid: true
            },
            phonenumber: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'phonenumber'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 10,
                    maxLength: 10,
                },
                valid: false,
                touched: false
            },
            dateofbirth: {
                elementType: 'input',
                elementConfig: {
                    label : 'DOB',
                    type: 'date',
                    placeholder: 'phonenumber'
                },
                value: '',
                validation: {
                    required :true,
                    ageCheck:true
                },
                valid: false,
                touched: false
            },
            registrationDate: {
                elementType: 'input',
                elementConfig: {
                    type: 'date',
                    placeholder: 'registration date'
                },
                value: '',
                validation: {
                    required :true
                },
                valid: false,
                touched: false
            },
            idtype: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: '', displayValue: 'Please select  ID  Type'},
                        {value: 'passport', displayValue: 'passport'},
                        {value: 'driving', displayValue: 'driving license'},
                        {value: 'ID card', displayValue: 'ID card'}
                    ]
                },
                value: '',
                validation: {required: true},
                valid: true
            },
            idnumber: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ID Number'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
        },
        formIsValid: false,
        loading: false
    }

    userHandler = ( event ) => {
        event.preventDefault();
        this.setState( { loading: true } );
        const formData = {};
        for (let formElementIdentifier in this.state.userForm) {
            console.log(formElementIdentifier);
            formData[formElementIdentifier] = this.state.userForm[formElementIdentifier].value;
        }
        formData["id"] ='R-'+Math.floor(Math.random()*(999-100+1)+100);
        console.log(" the generated user id"+ formData.id)

        const user = {
           
            userData: formData
        }
        alert(" Your user Id is  :"+formData.id);
       
       
        axios.post( 'http://localhost:3000/users', formData )
          .then( response => {
              this.setState( { loading: false } );
             this.props.history.push( '/' );
           } )
          .catch( error => {
               this.setState( { loading: false } );
          } );
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }
        if(rules.validName){
            const pattern = /^[a-zA-Z ]*$/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }
        if(rules.ageCheck){
            console.log("............."+value);

        }
        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedUserForm = {
            ...this.state.userForm
        };
        const updatedFormElement = { 
            ...updatedUserForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedUserForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedUserForm) {
            formIsValid = updatedUserForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({userForm: updatedUserForm, formIsValid: formIsValid});
    }

    render () {
        const formElementsArray = [];
        for (let key in this.state.userForm) {
            formElementsArray.push({
                id: key,
                config: this.state.userForm[key]
            });
        }
        let form = (
            <form onSubmit={this.userHandler}>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
            </form>
        );
        if ( this.state.loading ) {
            form = <Spinner />;
        }
        return (
            <div className={styles.Registration}>
                <h4>Enter your Personal Data</h4>
                {form}
            </div>
        );
    }
}

export default Registration;