import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import '../CssFiles/ManageEditPopup.css'
import Tooltip from '@material-ui/core/Tooltip';



class TotalPaybleTable extends Component {

    constructor(props) {
        super(props)

        this.state = {
          
        }

      
    }


    render() {

        return (
            <div>
                <div className="pop-up-container">
                  
                    <table id="table" className="table table-striped table-bordered detail-view">
                        <tr>
                            <th>Total Likes</th>
                            <td id = "pay-td">10.80</td>
                        </tr>

                        <tr>
                            <th>Total Referrals</th>

                            <td id = "pay-td">0.80</td>
                        </tr>
                        <tr>
                            <th>Total Shares</th>
                            <td id = "pay-td">45</td>
                        </tr>
                        <tr>
                            <th>Total Additional Bonus</th>
                                <td id = "pay-td">34.90</td>        
                        </tr>
                        <tr>
                            <th id = "total-amount-pay">Total Payble Amount</th>
                            <td id = "total-td">
                                90.89
                           </td>
                        </tr>

                    </table>
                </div>

            </div>
        )
    }
}

export default TotalPaybleTable