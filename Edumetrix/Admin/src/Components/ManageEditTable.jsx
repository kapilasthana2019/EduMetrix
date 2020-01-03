import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import '../CssFiles/ManageEditPopup.css'
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';



class ManageEditTable extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Email: "kapilasthana2008@gmail.com",
            EmailCheck: false,
            phoneNoCheck: false
        }

        this.mail_to = "mailto:" + this.state.Email
    }


    componentDidMount() {


    }

    PhoneNumberCheck = () => {

        console.log(" phone check button clicked");

        this.setState({
            phoneNoCheck: !this.state.phoneNoCheck
        })

    }

    EmailhandleCheck = () => {

        this.setState({
            EmailCheck: !this.state.EmailCheck
        })

    }

    render() {

        return (
            <div>
                <div className="pop-up-container">

                    <table id="table" className="table table-striped table-bordered detail-view">
                        <tr>
                            <th>User name</th>
                            <td>Nafi</td>
                        </tr>

                        <tr>
                            <th>First name</th>

                            <td>Ahammed</td>
                        </tr>
                        <tr>
                            <th>Last name</th>
                            <td>nafih</td>
                        </tr>
                        <tr>
                            <th>Phone Number</th>

                            <div id="check">
                                <td>6388064276</td>

                                <div id="verified-checkbox">
                                    <Checkbox

                                        onChange={event => this.PhoneNumberCheck(event)}
                                        color="default"
                                        value="default"
                                        checked={this.state.phoneNoCheck}
                                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                                    />
                                    <div>
                                        {
                                            (this.state.phoneNoCheck) ?
                                                <div id="verify-msg">
                                                    verified
                                            </div> :
                                                <div id="notverify-msg">
                                                    not verified
                                             </div>
                                        }
                                    </div>

                                </div>
                            </div>
                        </tr>

                        <tr>
                            <th>Email</th>

                            <div id="check">
                                <td><a href={this.mail_to}>{this.state.Email}</a></td>
                                <div id="verified-checkbox">
                                    <Checkbox

                                        onChange={event => this.EmailhandleCheck(event)}
                                        color="default"
                                        value="default"
                                        checked={this.state.EmailCheck}
                                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                                    />
                                    <div>
                                        {
                                            (this.state.EmailCheck) ?
                                                <div id="verify-msg">
                                                    verified
                                            </div> :
                                                <div id="notverify-msg">
                                                    not verified
                                             </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </tr>

                        <tr>
                            <th>Address</th>
                            <td>
                                Valiyakandathil House
                                 Al ameen nagar
                                Kodinhi PO 676309
                             </td>
                        </tr>

                        <tr>
                            <th>Photo</th>
                            <td>
                                <img src={require("../Assets/kapil.jpg")} id="user-photo" />
                            </td>
                        </tr>

                        <tr>
                            <th>Student id front</th>
                            <td>
                                <img src={require("../Assets/kapil.jpg")} id="front-photo" />
                            </td>
                        </tr>

                        <tr>
                            <th>Student id back</th>
                            <td>
                                <img src={require("../Assets/56.jpeg")} id="back-photo" />
                            </td>
                        </tr>

                    </table>
                </div>

            </div>
        )
    }
}

export default ManageEditTable