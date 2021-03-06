import React, { Component } from 'react'
import '../CssFiles/StudentRecord.css'
import Tooltip from '@material-ui/core/Tooltip';
import AdminMessageTable from './AdminMessageTable'



class AdminMessage extends Component {

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



        return (
            <div className="main-container">

                <div className="content-header">

                    <div id="heading">
                        Admin Message
                     </div>

                    <div className="content-part">

                        <div id="sub-heading">

                            <div id="inner-sub-heading">
                                <div> <img src={require('../Assets/menu.png')} id="docIcon" /></div>
                                <div id="page-heading">Message</div>
                            </div>

                            <div id="showing-pagination">
                                Showing 1-20 of 2,745 items.
                         </div>
                        </div>

                        <div className="export-buttons">
                            <div id="btns">

                                <div>
                                    <Tooltip title="Show all data">
                                        <button id="all-btn"

                                            className="btn">
                                            <span >
                                                <img src={require('../Assets/increase-size-option.png')}
                                                    id="all-img" />
                                            </span>
                                            All
                                        </button>
                                    </Tooltip>
                                </div>
                                <div>
                                    <Tooltip id="exportTooltip" title="Export">
                                        <button id="all-btn" className="btn btn-default dropdown-toggle">
                                            <span id="all-img">
                                                <img src={require('../Assets/export.png')}
                                                    id="export-img" />
                                            </span>

                                        </button>
                                    </Tooltip>
                                </div>
                            </div>

                        </div>

                        <div>
                            <AdminMessageTable props = {this.props}/>
                        </div>

                    </div>
                </div>


            </div>
        )
    }
}

export default AdminMessage