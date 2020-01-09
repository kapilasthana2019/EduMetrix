import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import '../CssFiles/ManageEditPopup.css'
import { Dialog, InputBase } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="Down" ref={ref} {...props} />;
});


class RefererTable extends Component {

    constructor(props) {
        super(props)

        this.state = {
            history_avail: false,
            historybool: false
        }
    }

    history_handle = () => {


        this.setState({
            history_avail: false,
            historybool: true
        })
        console.log("history bool", this.state.historybool);

        console.log("getting props", this.props.props.props.props);
        // this.props.props.props.props.history.push('/Dashboard/chatHistory')
    }


    handleClose = (event) => {

        this.setState({
            historybool: false
        })
        console.log("clicked");
    }

    handleSubmit = () => {
        this.props.props.props.props.history.push('/Dashboard/chatHistory')
    }

    render() {

        const adminPopup = (
            <div>
                <Dialog open={this.state.historybool}

                    onClose={event => this.handleClose(event)}
                >
                    <div className="password-field-container">
                        <div className="header-part">

                            <div id="header-title">
                                Admin Verification
                            </div>

                            <div id="btn-close">
                                <button
                                    onClick={event => this.handleClose(event)}
                                    className="close">X</button>
                            </div>
                        </div>
                        <hr />
                        <div className="password-field">
                            <div id="title">
                                Enter password
                            </div>
                            <div id="password-input">
                                <InputBase style={{ marginLeft: "10px", fontSize: "15px" }}
                                    type="password"
                                    margin="dense"
                                    autoFocus={true}
                                    fullWidth
                                />
                            </div>
                            <div id="password-submitBtn">
                                <button id="submit-btn"
                                    onClick={event => this.handleSubmit(event)}
                                    className="btn btn-primary">Submit</button>
                            </div>
                        </div>

                    </div>
                </Dialog>
            </div>
        )


        return (
            <div className="pop-up-container">
                <table id="table" className="table table-striped table-bordered detail-view">
                    <tr>
                        <th>Student Created Date</th>
                        <td>2019-12-25 15:01:35</td>
                    </tr>
                    <tr>

                        <th>Chat History</th>
                        <td>
                            <div className="chat-history-div">
                                <div>
                                    <Tooltip title="view chat history">
                                        <Button onClick={event => this.history_handle(event)}
                                            variant="contained"
                                            id="chat-history-btn"
                                        >
                                            Click Here
                               </Button>
                                    </Tooltip>
                                </div>

                                {
                                    (this.state.historybool) ?
                                        adminPopup : ""
                                }

                                <div id="history-msg">
                                    {
                                        (this.state.history_avail) ?
                                            "" : "History not available"
                                    }

                                </div>
                            </div>
                        </td>
                    </tr>

                </table>
            </div>
        )
    }
}

export default RefererTable