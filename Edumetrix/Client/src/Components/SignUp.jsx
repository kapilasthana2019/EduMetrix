import React, { Component } from 'react';
import validation from '../Utility/validations'
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import '../CssFiles/SignUp.css'
import { Typography } from '@material-ui/core';
const obj = new validation()

class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {

            userName: "",
            userNameError: "",
            password: "",
            passwordError: "",
            mobile_no: "",
            mobile_no_Error: "",
            email: "",
            emailError: "",
            name: "",
            nameError: "",
            surName: "",
            surNameError: "",
            checkVal: true


        }
    }

    input = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleCheck = () => {

        console.log(" check button clicked");

    }

    userName = () => {

        const result = obj.username(this.state.userName)

        console.log("result", result);

        this.setState({
            userNameError: result.error
        })

        return result.result
    }

    passwordValidation = () => {

        const validationResult = obj.passwordValidation(this.state.password)

        this.setState({
            passwordError: validationResult.error
        })
        return validationResult.result
    }

    mobileNo = () => {
        const validationResult = obj.mobileNovalidation(this.state.mobile_no)

        this.setState({
            mobile_no_Error: validationResult.error
        })
        return validationResult.result
    }

    emailValidate = () => {

        const validationResult = obj.emailValidation(this.state.email)

        this.setState({
            emailError: validationResult.error
        })
        return validationResult.result
    }

    name = () => {
     
        const validationResult = obj.username(this.state.name)

        this.setState({
            nameError: validationResult.error
        })
        return validationResult.result
    }
    sername = () => {
     
        const validationResult = obj.username(this.state.surName)

        this.setState({
            surNameError: validationResult.error
        })
        return validationResult.result
    }

    SignUpBtn = () => {

        let flag = false
        if (this.userName()) {

            flag = true
        }
        if (this.passwordValidation()) {
            flag = true
        }
        if (this.mobileNo()) {
            flag = true
        }
        if (this.emailValidate()) {
            flag = true
        }
        if(this.name()){
            flag = true
        }
        if(this.sername()){
            flag = true
        }

        if(!flag){

            var obj = {
                userName: this.state.userName,
                password: this.state.password,
                mobileNo: this.state.mobile_no,
                email: this.state.email,
                name: this.state.name,
                sername: this.state.sername
            }


            //api hit here
        }
       
        this.props.history.push('/GetStarted')
        console.log("value", obj);

    }

    render() {

        return (
            <div className="sign-up-page">

                <div className="signup-container">

                    
                    <div id="heading-part">
                    Create your Edumetrix Account 
                            </div>
                            <div id = "sub-title">
                    to continue with us 
                            </div>
                    <div className="main-container">

                        <div id="details-part">
                            <div>
                                <TextField

                                    error={this.state.userNameError}
                                    type="text"
                                    id="EmailField"
                                    name="userName"
                                    label="user name"
                                    value={this.state.userName}
                                    helperText={this.state.userNameError}
                                    onChange={event => this.input(event)}
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                />
                            </div>

                            <div id="user-name">

                                <TextField

                                    error={this.state.passwordError}
                                    type="password"
                                    id="passwordField"
                                    name="password"
                                    label="password"
                                    value={this.state.password}
                                    helperText={this.state.passwordError}
                                    onChange={event => this.input(event)}
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                />
                            </div>

                            <div id="user-name">
                                <TextField

                                    error={this.state.mobile_no_Error}
                                    type="text"
                                    id="mobileNo"
                                    name="mobile_no"
                                    label="mobile number"
                                    helperText={this.state.mobile_no_Error}
                                    value={this.state.mobile_no}
                                    onChange={event => this.input(event)}
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                />
                            </div>

                            <div id="user-name">

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
                            <div id="usernamewithpass">
                                <div id="justName">
                                    <TextField

                                        error={this.state.nameError}
                                        type="text"
                                        id="name"
                                        name="name"
                                        label="name"
                                        helperText={this.state.nameError}
                                        defaultValue={this.state.name}
                                        onChange={event => this.input(event)}
                                        variant="outlined"
                                        margin="dense"
                                        fullWidth
                                    />
                                </div>
                                <div id="surName">
                                    <TextField

                                        error={this.state.surNameError}
                                        type="text"
                                        id="surname"
                                        name="surName"
                                        label="Surname"
                                        helperText={this.state.surNameError}
                                        defaultValue={this.state.surName}
                                        onChange={event => this.input(event)}
                                        variant="outlined"
                                        margin="dense"
                                        fullWidth
                                    />
                                </div>


                            </div>


                        </div>

                        <div id="imagepart">

                            <div id="logo-img">
                                <img src={require('../Assets/Coin PNG.png')}
                                    id="companylogo" />
                            </div>
                            <div id="logo-title">
                                Edumetrix Empowerment Foundation
                            </div>
                        </div>
                    </div>

                    <div id="checkbox-terms">
                        <div>
                            <Checkbox

                                onChange={event => this.handleCheck(event)}
                                color="default"
                                value="default"
                                checked={this.state.checkVal}
                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                            />
                        </div>
                        <div>

                            <Typography id="terms">
                                I read and agree to Terms & Conditions
                            </Typography>

                        </div>

                    </div>
                    <div id="get-start-btn">
                        <button id="getStarted" onClick={this.SignUpBtn} >
                            Get started
                       </button>
                    </div>

                    <div id="have-account">
                        Already have an account? Sign in!
                    </div>

                </div>

            </div>
        )
    }
}

export default SignUp