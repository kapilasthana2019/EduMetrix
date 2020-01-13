import React, { Component } from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import InputBase from '@material-ui/core/InputBase';
import '../CssFiles/PaymentRequestEditPopup.css'

const status = ["Pending", "Paid"]

class PaymentAmountTable extends Component {


    constructor(props) {
        super(props)

        this.state = {
            statusValue: "pending"
        }
    }
    dropdownHandle = async (event) => {

        await this.setState({
            statusValue: event.target.value,
            bankDetailbool: false,
            crptoBool:false
        })
    }

    bankDetailCheckbox = (event) => {

        this.setState({
            bankDetailbool: !this.state.bankDetailbool
        })
    }

    cryptoCheckbox = (event)=>{
        this.setState({
            crptoBool: !this.state.crptoBool
        })
    }

    render() {


        return (
            <table id="table" className="table table-striped table-bordered detail-view">

                <tr>
                    <th>Amount</th>
                    <td>

                        <div>

                            <div id="amount-input">

                                <InputBase id="text-amount"
                                    type="text"
                                    margin="dense"
                                    autoFocus={true}
                                />
                            </div>
                            {/* <div id="add-btn-div">
                                    <button type="button"
                                        id="add-btn"
                                        className="btn btn-link">add</button>
                                </div> */}
                        </div>
                    </td>
                </tr>

                <tr>
                    <th>Withdrawn</th>
                    <td>
                        <table id="table" className="table table-striped table-bordered detail-view">
                            <tr>
                                <th>
                                    Bank
                                </th>

                                <td>
                                    <div id="bank-det">
                                        <div id="bank">
                                            bank detail
                                </div>
                                        <div id="checkbox">
                                            <Checkbox

                                                onChange={event => this.bankDetailCheckbox(event)}
                                                color="default"
                                                value="default"
                                                checked={this.state.bankDetailbool}
                                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                                            />
                                        </div>
                                    </div>

                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Crypto
                                </th>
                                <td>
                                    <div id="bank-det">
                                        <div id = "crypto-det">
                                            crpto detail
                                </div>
                                        <div id="checkbox">
                                            <Checkbox

                                                onChange={event => this.cryptoCheckbox(event)}
                                                color="default"
                                                value="default"
                                                checked={this.state.crptoBool}
                                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                                            />
                                        </div>
                                    </div>
                                </td>
                            </tr>

                        </table>

                    </td>
                </tr>

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
            </table>
        )
    }
}

export default PaymentAmountTable