import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import '../CssFiles/ManageEditPopup.css'
import ManageEditTable from './ManageEditTable'
import RefererTable from './RefererTable'
import LikeCounterTable from './LikeCounterTable'
import RefererCounterTable from './RefererCounterTable'
import ShareCounterTable from './ShareCounterTable'
import AdiitionalBonusTable from './AdiitionalBonusTable'
import TotalPaybleTable from './TotalPaybleTable'


class RequestTablePopup extends Component {

    constructor(props) {
        super(props)

        this.state = {
            editData: this.props.data,
            open: this.props.open
        }
    }

    handleClose = (event) => {

        this.setState({
            open: !this.state.open
        })
        this.props.refreshEdit()
    }

    render() {

        // console.log("inside edit",this.state.editData);

        return (
            <div>
                <Dialog open={this.state.open}

                    onClose={event => this.handleClose(event)}>

                    <div className="detail-container">

                        <div className="sub-container">

                            <div id="student-id-show">
                                <div id="student-id">
                                    Students #4564
                              </div>
                                <div id="closeBtn">
                                    <button className="close"
                                        onClick={event => this.handleClose(event)}>x</button>
                                </div>
                            </div>
                        </div>

                        <div className="data-container-show">

                            <ManageEditTable props = {this.props}/>

                            <div className="Referer-title">
                                <li>Referer Details</li>
                            </div>
                            <div>

                                <RefererTable props = {this.props}/>
                            </div>

                            <div className="Earning-title">
                                <div>
                                    <li>Earning Details</li>
                                </div>
                                <div id="total-val">
                                    Life Time earning-: {50.02}
                                </div>

                            </div>
                            <div>
                                <div className="earning-tables">
                                    <LikeCounterTable />
                                    <RefererCounterTable />
                                </div>

                                <div className="earning-tables">
                                    <ShareCounterTable />
                                    <AdiitionalBonusTable />
                                </div>
                            </div>

                            <div className="total-payble">
                                <li>Total Payble</li>
                            </div>
                            <div>
                                <TotalPaybleTable />
                            </div>
                            <hr />
                            <div className="close-nd-edit">

                                <div>
                                    <button 
                                    onClick={event => this.handleClose(event)}
                                    className="btn btn-default">
                                        Close
                               </button>
                                </div>
                                <div>
                                    <button  
                                     className="btn btn-primary">
                                        Verify
                               </button>

                                </div>
                            </div>
                        </div>


                    </div>

                </Dialog>
            </div>
        )
    }
}

export default RequestTablePopup
