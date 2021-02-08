import React,{Component} from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import classes from  './Login.css';
import * as actionTypes from '../../store/action';
import axios from 'axios';
import { connect } from 'react-redux';

class Login extends Component {
    state = {
        controls: {
            username: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'User Name'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
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
            }
        },
        isSignup: true
    }
    checkValidity ( value, rules ) {
        let isValid = true;
        if ( !rules ) {
            return true;
        }

        if ( rules.required ) {
            isValid = value.trim() !== '' && isValid;
        }

        return isValid;
    }

    inputChangedHandler = ( event, controlName ) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity( event.target.value, this.state.controls[controlName].validation ),
                touched: true
            }
        };
        this.setState( { controls: updatedControls } );
    }

    submitHandler = ( event ) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.controls) {
            console.log(formElementIdentifier);
            formData[formElementIdentifier] = this.state.controls[formElementIdentifier].value;
        }
        axios.get('http://localhost:3000/users')
    .then(resp => {
        let data = resp.data;
        data.forEach(e => {
            if((e.username===formData.username) &&(e.password===formData.password)){
                console.log("Logged in successfully");
                this.props.onLoginAction(e.username,e.id);
                this.props.history.push( '/Home' );
            }
        });
    })
    .catch(error => {
        console.log(error);
    }); 
       
        
    }

    registerHandler = ( event ) => {
        event.preventDefault();
        this.props.history.push( '/Registration' );
        
    }
   

    render () {
        const formElementsArray = [];
        for ( let key in this.state.controls ) {
            formElementsArray.push( {
                id: key,
                config: this.state.controls[key]
            } );
        }

        let form = formElementsArray.map( formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={( event ) => this.inputChangedHandler( event, formElement.id )} />
        ) );

      

        return (
            <div className={classes.Login}>
               
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button btnType="Success" >LOGIN</Button>
                   
                </form>
                <form onSubmit={this.registerHandler}>
                    
                    <Button btnType="Success">REGISTER</Button>
                </form>
            </div>
        );
    }
}



const mapDispatchToProps = dispatch =>{

        return{
            onLoginAction : (name,id) => dispatch({type:actionTypes.LOGIN_ACTION,userName:name,userId:id})
        }
};


export default connect(null, mapDispatchToProps)(Login);
