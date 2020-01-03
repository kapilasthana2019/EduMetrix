import React, {Component} from 'react'


class ShareCounterTable extends Component{

    render()
    {
        return(
            <div className = "pop-up-container">
            <div id = "likes-counter">Share Counters</div>
            <table id="share-table" className="">
            <tr>
                            <th>total Shares</th>
                            <td>0</td>
               </tr>
                 <tr>
                            <th>Paid shairs</th>
                            <td>0</td>
                 </tr>
                 <tr>
                            <th>Payble Shares</th>
                            <td>0</td>
               </tr>
                 <tr>
                            <th>Lifetime Earning Coins</th>
                            <td>0</td>
                 </tr>
                 <tr>
                            <th>Payble Coins</th>
                            <td>0</td>
                 </tr>
                </table>
            </div>
        )
    }
}

export default ShareCounterTable