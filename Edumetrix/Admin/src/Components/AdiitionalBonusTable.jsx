import React, {Component} from 'react'


class AdiitionalBonusTable extends Component{

    render()
    {
        return(
            <div className = "pop-up-container">
            <div id = "likes-counter">Aditional Bonus</div>
            <table id="referer-table" className="">
            <tr>
                            <th>Total Bonus</th>
                            <td>0</td>
               </tr>
                 <tr>
                            <th>Paid Bonus</th>
                            <td>0</td>
                 </tr>
                 <tr>
                            <th>Payble Bonus</th>
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

export default AdiitionalBonusTable