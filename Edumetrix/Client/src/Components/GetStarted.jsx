import React, { Component } from 'react'
import InputBase from '@material-ui/core/InputBase';
import GetPicture from '../Components/GetPicture'

import '../CssFiles/GetStarted.css'
import { Tooltip } from '@material-ui/core';

const countryOptions = [
    { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
    { key: 'af', value: 'af', flag: 'af', text: 'India' },
    { key: 'ax', value: 'ax', flag: 'ax', text: 'Malaysia' },
    { key: 'al', value: 'al', flag: 'al', text: 'New York' },
    { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
    { key: 'af', value: 'af', flag: 'af', text: 'India' },
    { key: 'ax', value: 'ax', flag: 'ax', text: 'Malaysia' },
    { key: 'al', value: 'al', flag: 'al', text: 'New York' },
    { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
    { key: 'af', value: 'af', flag: 'af', text: 'India' },
    { key: 'ax', value: 'ax', flag: 'ax', text: 'Malaysia' },
    { key: 'al', value: 'al', flag: 'al', text: 'New York' },
]

const states = ["andaman nicobar", "karnataka", "telangana", "tamilnadu"]
const imagesParts = ['Change picture', 'Upload Id front ', 'Upload Id back ']
class GetStarted extends Component {

    constructor(props) {
        super(props)

        this.state = {
            mobileDigit: "6388",
            date: "",
            value: "India",
            disable: true,
            stateValue: " Choose state"
        }
    }

    componentDidMount = async () => {

        var date = (new Date()).toLocaleString()
        date = date.slice(10, 2)
        await this.setState({

        })

        console.log("date in mount", date);

    }

    dropdownHandle = async (event) => {
        await this.setState({
            value: event.target.value
        })

    }

    stateHandle = async (event) => {
        await this.setState({
            stateValue: event.target.value
        })
    }

    render() {

        return (

            <div>
                <div className="container">

                    <div className="side-image-container">
                        <div id="image-part">
                            <div id="img-part-manage">
                                <img src={require('../Assets/Coin PNG.png')} id="side-img" />
                            </div>
                        </div>

                        <div id="title-part">
                            Edumetrix
                        </div>
                    </div>

                    <div className="sub-container">
                        <div id="following-title">
                            Please complete the following steps
                        </div>
                        <div id="otpMsg-title">
                            Please enter OTP passwords which already send to your
                            email and mobile no
                             :-{this.state.mobileDigit}xxxxx89
                        </div>
                        <div className="otp-fields">

                            <div>
                                <div id="email-otp">email OTP</div>

                                <div id="input">
                                    <InputBase id="text"
                                        type="text"
                                        margin="dense"
                                        fullWidth
                                    />
                                </div>
                            </div>

                            <div>
                                <div id="email-otp">mobile OTP</div>
                                <div id="input">
                                    <InputBase id="text"
                                        margin="dense"
                                        fullWidth />
                                </div>

                            </div>
                        </div>

                        <div className="otp-fields-verify">
                            <div>
                                <Tooltip title="OTP verification">
                                    <button id="verifyBtn">
                                        verify OTP
                             </button>
                                </Tooltip>
                            </div>

                            <div>
                                <Tooltip title="Resend Otp">
                                    <button id="vresendBtn">
                                        Resend OTP
                             </button>
                                </Tooltip>

                            </div>
                        </div>
                        <div id="verifyErrorMsg"> OTP not verified please enter again</div>
                        <div><hr /></div>
                        <div className="otp-fields">

                            <div id = "Dob">
                                <div id="email-otp">date of birth</div>

                                <div id={(this.state.disable) ? "disable-input" : "input"}>

                                    <InputBase id="text"
                                        type="date"
                                        defaultValue={this.state.date}
                                        margin="dense"
                                        disabled={true}
                                        fullWidth
                                    />
                                </div>
                            </div>

                            <div id = "Dob">
                                <div id="email-otp">phone</div>
                                <div id={(this.state.disable) ? "disable-input" : "input"}>
                                    <InputBase id="text"
                                        margin="dense"
                                        disabled={true}
                                        fullWidth />
                                </div>

                            </div>
                        </div>

                        <div className="otp-fields">

                            <div id = "Dob">
                                <div id="email-otp">Address</div>

                                <div id={(this.state.disable) ? "disable-input" : "input"}>
                                    <InputBase id="text"
                                        type="text"
                                        defaultValue=""
                                        margin="dense"
                                        multiline="6"
                                        disabled={true}
                                        fullWidth
                                    />
                                </div>
                            </div>

                            <div id = "Dob">
                                <div id="email-otp">Country</div>

                                <div id="dropDownField">

                                    <select id="drop-down" value={this.state.value}
                                        disabled={true}
                                        onChange={event => this.dropdownHandle(event)}>
                                        {
                                            countryOptions.map((item) =>
                                                <option value={item.text}>
                                                    {item.text}
                                                </option>
                                            )
                                        }
                                    </select>
                                </div>

                            </div>
                        </div>

                        <div className="otp-fields">

                            <div id = "Dob">
                                <div id="email-otp">state</div>

                                <div id="dropDownField">

                                    <select id="drop-down" value={this.state.stateValue}
                                        disabled={true}
                                        onChange={event => this.stateHandle(event)}>
                                        {
                                            states.map((item) =>
                                                <option value={item}>
                                                    {item}
                                                </option>
                                            )
                                        }
                                    </select>
                                </div>

                            </div>

                            <div id = "Dob">
                                <div id="email-otp">school</div>

                                <div id={(this.state.disable) ? "disable-input" : "input"}>
                                    <InputBase id="text"
                                        disabled={true}
                                        margin="dense"
                                        fullWidth />
                                </div>

                            </div>
                        </div>

                        <div className="otp-fields">

                            <div id = "Dob">
                                <div id="email-otp">student id</div>

                                <div id={(this.state.disable) ? "disable-input" : "input"}>
                                    <InputBase id="text"
                                        type="text"
                                        margin="dense"

                                        disabled={true}
                                        fullWidth
                                    />
                                </div>
                            </div>

                            <div id = "Dob">
                                <div id="email-otp">reference id</div>
                                <div id={(this.state.disable) ? "disable-input" : "input"}>
                                    <InputBase id="text"
                                        margin="dense"
                                        disabled={true}
                                        fullWidth />
                                </div>

                            </div>
                        </div>

                        <div className="otp-fields">
                            {
                                imagesParts.map((item, key) =>
                                    <GetPicture item={item} />
                                )
                            }

                        </div>
                        <div id = "submitbtn">
                        <button id="vresendBtn">
                                       Submit
                             </button> 
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default GetStarted