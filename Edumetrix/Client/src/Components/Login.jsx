import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import validation from '../Utility/validations'
import '../CssFiles/Login.css'
const obj = new validation()



class Login extends Component {

    //defining constructor for initializing components state.
    constructor(props) {
        super(props)
        // initialize state.
        this.state = {
            email: "",
            emailError: "",
            password: "",
            passwordError: ""
        }
    }

    /*
     defining input function for all textfield 
    this method called on every textfield changes..
    and after store data into states.
    */

    input = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })

    }

    emailValidation = () => {
        const validationResult = obj.emailValidation(this.state.email)

        this.setState({
            emailError: validationResult.error
        })
        return validationResult.result
    }

    passwordValidation = () => {

        const validationResult = obj.passwordValidation(this.state.password)

        this.setState({
            passwordError: validationResult.error
        })
        return validationResult.result
    }


    signIn = () => {

        let flag = false

        if (this.emailValidation()) {
            flag = true
        }
        else if (this.passwordValidation()) {

            flag = true
        }

        if (!flag) {


//api integration

        }


    }

    signup = () => {

        this.props.history.push("/signUp")
    }

    //rendering method 

    render() {

        return (
            <div className="Login">

                <div className="LoginContainer">

                    <div className="logo">

                        <div className="company-profile">
                            <img src={require('../Assets/Coin PNG.png')} id="profile-img" />
                        </div>
                    </div>
                    <div id="signIn-title">
                        Sign in your account
                    </div>
                    <div id="emailText">

                        <TextField

                            error={this.state.emailError}
                            type="email"
                            id="EmailField"
                            name="email"
                            label="email"
                            helperText={this.state.emailError}
                            defaultValue={this.state.email}
                            onChange={event => this.input(event)}
                            variant="outlined"
                            margin="dense"
                            fullWidth
                        />
                    </div>
                    <div id="emailText">

                        <TextField

                            error={this.state.passwordError}
                            type="password"
                            id="passwordField"
                            name="password"
                            label="password"
                            helperText={this.state.passwordError}
                            defaultValue={this.state.password}
                            onChange={event => this.input(event)}
                            variant="outlined"
                            margin="dense"
                            fullWidth
                        />

                    </div>
                    <div className="signin-btn">
                        <button id="signInBtn" onClick={this.signIn}
                        // onClick={event => this.onSubmit(event)}
                        ><span>Sign In </span></button>
                    </div>
                   

                    <div id="create-title">
                        <Tooltip title="Sign up with us">
                            <button id="sign-up" onClick={this.signup}>
                                Not yet an account? Sign up!
                       </button>
                        </Tooltip>
                    </div>
                    
                    <Tooltip title="find your password ">
                        <div className="forgot-password">
                            Forgot Password?
                    </div>
                    </Tooltip>
                        {/* <div id = "or">
                        or log in with one of your existing accounts
                        
                       
              
                    </div> */}
                    {/* <div className="social-icons">
                        <Tooltip title="login with facebook">
                            <div id="fb-icon">
                                <img src={require('../Assets/facebook.png')} id="googleImg" />
                            </div>
                        </Tooltip>
                        <Tooltip title="login with google">
                            <div id="google-icon">
                                <img src={require('../Assets/google-plus.png')} id="googleImg" />
                            </div>
                        </Tooltip>
                    </div> */}


                </div>

            </div>
        )
    }
}

export default Login