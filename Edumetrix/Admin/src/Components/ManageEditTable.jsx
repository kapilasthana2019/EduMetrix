import React, { Component } from 'react'
import '../CssFiles/ManageEditPopup.css'
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';



class ManageEditTable extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Email: "kapilasthana2008@gmail.com",
            photoVerify: false,
            frontPhotoVerify:false
        }

        this.mail_to = "mailto:" + this.state.Email
    }


    componentDidMount() {


    }


    PhotoVerify = () => {

        this.setState({
            photoVerify: !this.state.photoVerify
        })

    }

    frontPhotoVerify = ()=>{
        this.setState({
            frontPhotoVerify: !this.state.frontPhotoVerify
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
                                <div className="image-verification">
                                    <div id="image-part">
                                        <img src={require("../Assets/kapil.jpg")}
                                            id="user-photo" />
                                    </div>

                                    <div id="verified-checkbox">
                                        <Checkbox

                                            onChange={event => this.PhotoVerify(event)}
                                            color="default"
                                            value="default"
                                            checked={this.state.photoVerify}
                                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                                        />
                                        <div>
                                            {
                                                (this.state.photoVerify) ?
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
                            </td>
                        </tr>

                        <tr>
                            <th>Student id front</th>
                            <td>
                                <div className="id-front-verify">
                                    <div id = "front-pic">
                                        <img src={require("../Assets/kapil.jpg")}
                                            id="front-photo" />
                                    </div>
                                    <div id="front-verified-checkbox">
                                        <div style = {{marginLeft:"20px",marginTop:"150px"}}>
                                        <Checkbox

                                            onChange={event => this.frontPhotoVerify(event)}
                                            color="default"
                                            value="default"
                                            checked={this.state.frontPhotoVerify}
                                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                                        />
                                        </div>
                                        <div>
                                            {
                                                (this.state.frontPhotoVerify) ?
                                                    <div id="front-verify-msg">
                                                        verified
                                            </div> :
                                                    <div id="front-notverify-msg">
                                                        not verified
                                             </div>
                                            }
                                        </div>
                                    </div>
 

                                </div>

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