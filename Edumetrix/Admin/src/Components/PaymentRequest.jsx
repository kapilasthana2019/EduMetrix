import React, { Component } from 'react'
import '../CssFiles/StudentRecord.css'
import Tooltip from '@material-ui/core/Tooltip';
import PaymentRequestTable from './PaymentRequestTable'


class PaymentRequest extends Component {

    constructor(props) {
        super(props)

        this.state = {
            toggle: localStorage.getItem('menuToggle'),
            open: ""
        }
    }
    handleToggle = () => {
        this.setState({
            open: !this.state.open
        });
    };

    render() {

        console.log("menutoggle", this.state.toggle);

        return (
            <div className="main-container">

                <div className="content-header">

                    <div id="heading">
                        Payment Request
                     </div>

                    <div className="payment-content-part">
                        <div>
                            <PaymentRequestTable/>
                        </div>

                    </div>
                </div>


            </div>
        )
    }
}

export default PaymentRequest