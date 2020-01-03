import React, {Component} from 'react'


class LikeCounterTable extends Component{

    render()
    {
        return(
            <div className = "pop-up-container">

            <div id = "likes-counter">Like Counters</div>

            <table id="likes-table"
            >
            <tr>
                            <th>Total Likes</th>
                            <td>0</td>
               </tr>
                 <tr>
                            <th>Paid Likes</th>
                            <td>0</td>
                 </tr>
                 <tr>
                            <th>Payble Likes</th>
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

export default LikeCounterTable