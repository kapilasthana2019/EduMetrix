
import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import PaymentAmountTable from './PaymentAmountTable'
import '../CssFiles/PaymentRequestEditPopup.css'

class PaymentRequestEditPopup extends Component {


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

        return (

            <div>

                <Dialog open={this.state.open}

                    onClose={event => this.handleClose(event)}>

                    <div className="detail-container">

                        <div className="sub-container">
                            <div id="student-id-show">
                                <div id="student-id">
                                   Payment Request
                              </div>
                                <div id="closeBtn">
                                    <button className="close"
                                        onClick={event => this.handleClose(event)}>x</button>
                                </div>
                            </div>
                        </div>

                        <div className="data-container-show">
                    <PaymentAmountTable props = {this.props}/>

                        </div>
                    </div>

                </Dialog>
            </div>
        )
    }
}

export default PaymentRequestEditPopup 