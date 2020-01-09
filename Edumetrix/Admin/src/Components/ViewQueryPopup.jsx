import React, { Component } from 'react'
import '../CssFiles/QueryPopUp.css'
import InputBase from '@material-ui/core/InputBase';
import EditPopUp from './EditPopUp'

const status = ["Open", "Closed", "Pending"]

class ViewQueryPopup extends Component {


    constructor(props) {
        super(props)

        this.state = {
            statusValue: "Pending",
            editHandle: false
        }
    }

    HandleClose = () => {

        this.props.close()
    }

    dropdownHandle = async (event) => {

        await this.setState({
            statusValue: event.target.value
        })
    }

    EditHandle = async () => {
      
        await this.setState({
            editHandle: true
        })
    }

    render() {

        return (
            <div>
                <div className="viewPopUp-container">

                    <div id="student-id">
                        <div>
                            Queries #15
                    </div>
                        <div>
                            <button className="close"
                                onClick={event => this.HandleClose(event)}>x</button>
                        </div>
                    </div>
                    <hr />
                    <div className="view-table-container">
                        <table id="table" className="table table-striped table-bordered detail-view">
                            <tr>
                                <th> User name</th>
                                <td>kapil</td>
                            </tr>
                            <tr>
                                <th> Type</th>
                                <td>Other</td>
                            </tr>

                            <tr>
                                <th> Query</th>
                                <td>I dont get coins</td>
                            </tr>
                            <tr>
                                <th> Answer</th>
                                <td>
                                    <div id="ans-input">
                                        <InputBase id="ans-text"
                                            type="text"
                                            placeholder="Type answer here.."
                                            defaultValue=""
                                            margin="dense"
                                            multiline="3"
                                            fullWidth
                                        />
                                    </div>

                                </td>
                            </tr>
                            {/* <tr>
                                <th>Status</th>
                                <td>closed</td>
                            </tr> */}

                            <tr>
                                <th>Status</th>
                                <td>
                                    <select id="drop-down" value={this.state.statusValue}

                                        onChange={event => this.dropdownHandle(event)}>
                                        {
                                            status.map((item) =>
                                                <option value={item}>
                                                    {item}
                                                </option>
                                            )
                                        }
                                    </select>
                                </td>
                            </tr>


                            <tr>
                                <th> Post Date Time</th>
                                <td>2019-06-15 10:33:59</td>
                            </tr>
                            <tr>
                                <th> Closed Date Time</th>
                                <td>2019-12-30 05:02:27</td>
                            </tr>
                        </table>
                    </div>
                    <hr />
                    <div className="view-close-nd-edit">
                        <div>
                            <button
                                onClick={event => this.HandleClose(event)}
                                className="btn btn-default">
                                Close
                               </button>
                        </div>
                        <div>
                            <button onClick={event => this.EditHandle(event)}
                                className="btn btn-primary">
                                Edit
                               </button>

                        </div>
                    </div>
                </div>
                {
                    (this.state.editHandle) ? <EditPopUp 
                    HandleClose = {this.HandleClose}
                    open ={this.state.editHandle}/>
                     : ""
                }
            </div>
        )
    }

}

export default ViewQueryPopup