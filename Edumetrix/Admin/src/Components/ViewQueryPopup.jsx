import React, { Component } from 'react'
import '../CssFiles/QueryPopUp.css'


class ViewQueryPopup extends Component {



    HandleClose = () => {

        this.props.close()
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
                                <th>Status</th>
                                <td>closed</td>
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
                            onClick = {event=> this.HandleClose(event)}
                             className="btn btn-default">
                                Close
                               </button>
                        </div>
                        <div>
                            <button
                                className="btn btn-primary">
                                Edit
                               </button>

                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default ViewQueryPopup