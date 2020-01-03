import React, {Component} from 'react'


class RefererCounterTable extends Component{

    render()
    {
        return(
            <div className = "pop-up-container">
            <div id = "likes-counter">Referral Counters</div>
            <table id="referer-table" className="">
            <tr>
                            <th>Total Referral</th>
                            <td>0</td>
               </tr>
                 <tr>
                            <th>Paid Referral</th>
                            <td>0</td>
                 </tr>
                 <tr>
                            <th>Payble Referral</th>
                            <td>0</td>
               </tr>
                 <tr>
                            <th> Lifetime Earning Coins </th>
                            <td>0</td>
                 </tr>
                 <tr>
                            <th> Payble Coins </th>
                            <td>0</td>
                 </tr>
                </table>
            </div>
        )
    }
}

export default RefererCounterTable