import React, { Component } from 'react'
import { Dialog } from '@material-ui/core'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import AdminMessageEdit from './AdminMessageEdit'
import AdminUploadLink from './AdminUploadLink'
import AdminUploadPic from './AdminUploadPic'

import 'react-tabs/style/react-tabs.css'
import '../CssFiles/StudentRecord.css'

class AdminMessagePopup extends Component {

    constructor(props) {
        super(props)

        this.state = {

            open: this.props.open,
            data: this.props.data
        }
    }

    handleClose = (event) => {

        this.setState({
            open: !this.state.open,

        })
        this.props.refreshEdit()
    }

    tabsHandle = (index) => {

        console.log("tab index", index);

    }

    render() {


        const TabsArea = (

            <div>

                <Tabs defaultIndex={0}
                    onSelect={index => this.tabsHandle(index)}>
                    <TabList>

                        <Tab>Message</Tab>
                        <Tab>Upload videos</Tab>
                        <Tab>Upload Links</Tab>
                        <Tab>Upload Pictures</Tab>
                    </TabList>

                    <TabPanel style={{ padding: "10px" }}>
                        <AdminMessageEdit data={this.state.data} /></TabPanel>

                    <TabPanel style={{ padding: "10px" }}>Upload videos</TabPanel>

                    <TabPanel style={{ padding: "10px" }}>
                        <AdminUploadLink data={this.state.data} />
                    </TabPanel>

                    <TabPanel style={{ padding: "10px" }}>
                        <AdminUploadPic data={this.state.data} />

                    </TabPanel>

                </Tabs>
            </div>
        )


        return (
            <div>
                <Dialog open={this.state.open} onClose={event => this.handleClose(event)}>

                    <div className="detail-container">
                        <div className="sub-container">
                            <div id="student-id-show">
                                <div id="student-id">
                                    Students #4564
                              </div>
                                <div id="closeBtn">
                                    <button className="close"
                                        onClick={event => this.handleClose(event)}>x</button>
                                </div>
                            </div>
                        </div>

                        <div className="data-container-show">
                            <div id="tab-area">
                                {TabsArea}
                            </div>
                        </div>
                        <hr />
                        <div id="close-btn">
                            <div id = "close">
                                <button
                               onClick= {event => this.handleClose(event)}
                                    className="btn btn-danger">
                                    Close
                               </button>
                            </div>
                            <div>
                            <button
                                    className="btn btn-primary">
                                    Submit
                               </button>
                            </div>
                        </div>
                    </div>

                </Dialog>
            </div>
        )
    }
}

export default AdminMessagePopup