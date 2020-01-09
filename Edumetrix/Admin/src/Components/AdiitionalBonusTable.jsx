import React, { Component } from 'react'
import InputBase from '@material-ui/core/InputBase';
import '../CssFiles/ManageEditPopup.css'

class AdiitionalBonusTable extends Component {

    render() {
        return (
            <div className="pop-up-container">
                <div id="likes-counter">Aditional Bonus</div>
                <table id="referer-table" className="">
                    <tr>
                        <th>Aditional Bonus</th>
                        <td>
                            <div id="bonus-field">
                                <div id="bonus-input">
                                    <InputBase id="text"
                                        type="text"
                                        margin="dense"
                                        inputProps={{ maxLength: 2 }}
                                        autoFocus={true}
                                    />
                                </div>
                                <div id="add-btn-div">
                                    <button type="button"
                                        id="add-btn"
                                        className="btn btn-link">add</button>
                                </div>
                            </div>

                        </td>
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