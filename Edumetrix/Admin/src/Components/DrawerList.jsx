import React, { Component } from 'react'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { makeStyles, useTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import '../CssFiles/Header.css'

// let width = "";

class DrawerList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            open: false
        }
    }

    drawerWidth =()=>{

        let width = ""
        if(this.props.open){
            width ="200px"
        }else{
            width ="42px" 
        }
        return width
    }

    style() {

        const useStyles = createMuiTheme((
            {
                overrides: {

                    MuiDrawer: {

                        paperAnchorLeft: {
                            top: "63px",
                            width: this.drawerWidth(),
                            height: "93vh",
                            backgroundColor: "#252525",
                            color: "white",

                        },

                        paperAnchorDockedLeft: {

                        }
                    },
                }
            }));

        return useStyles
    }
    // .MuiListItemText-root

    listItem(){
        const useStyles = createMuiTheme((
            {
                overrides: {
                    MuiListItemText:{
                        root:{
                            marginLeft:"-30px"
                        }
                    }
                }
            }));

            return useStyles
    }
    collapsStyle() {

        const useStyles = createMuiTheme((
            {
                overrides: {
                    MuiListItem: {

                        root: {
                            backgroundColor: "gray",
                            fontSize:"10px",
                            paddingTop:"0px",
                            paddingBottom:"6px",
                            marginleft: "-28px"
                        }
                    },
                    MuiTypography:{

                        body1:{
                            
                                fontSize:"13px",
                                padding:"0px",
                                marginLeft: "-22px"
                           
                        }
                    }
                }
            }));
        return useStyles
    }

    handleClickStudent = () => {

        this.setState({
            open: !this.state.open
        })
    }

    manageList = (event)=>{

        // console.log("props",this.props.props.props);
        
        this.props.props.props.history.push('/Dashboard/studentManage')
    }

    studentRequest = (event)=>{
        
        this.props.props.props.history.push('/Dashboard/studentRequest')
    }

    suspended = (event)=>{

        this.props.props.props.history.push('/Dashboard/suspended')
    }

    paymentRequest = (event)=>{
        this.props.props.props.history.push('/Dashboard/paymentRequest')

    }

    queries = (event)=>{
        this.props.props.props.history.push('/Dashboard/queries')
    }

    PostPage = (event)=>{
        this.props.props.props.history.push('/Dashboard/PostPage')
    }

    AdminMessage = (event)=>{
        this.props.props.props.history.push('/Dashboard/AdminMessage')
    }

    render() {
        return (

            <div style={{ marginTop: "100px" }}>

                <MuiThemeProvider theme={this.style()}>
                    <Drawer

                        variant="permanent"
                        anchor="left"
                        open={this.props.open}>

        <MuiThemeProvider theme={this.listItem()}>
                        <List>

                            {/* item 1 in shown in list======================================== */}
                            <ListItem button onClick={this.handleClickStudent}>

                                <ListItemIcon >
            <img src ={require('../Assets/student.png')} id = "studentImg"/>
                                </ListItemIcon>

                                <ListItemText primary="Students" />
                                {(this.state.open) ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            {/* collapse listing======================================== */}

                            <MuiThemeProvider theme={this.collapsStyle()}>
                                <Collapse in={this.state.open} timeout="auto"
                                  
                                    unmountOnExit>

                                    <List component="div" disablePadding>
                                        {/* item 1 */}

                                        <ListItem button
                                        onClick = {event=>this.manageList(event)}
                                        className={""}>
                                            <ListItemIcon>
                                            <img src ={require('../Assets/user.png')} id = "studentImg"/>
                                            </ListItemIcon>
                                            <ListItemText primary="Manage" />
                                        </ListItem>

                                        {/* item 2 */}

                                        <ListItem button className={""}
                                        onClick = {event=>this.studentRequest(event)}
                                        >
                                            <ListItemIcon>

                                            </ListItemIcon>
                                            <ListItemText primary="Student Request" />
                                        </ListItem>
                                        {/* item 1 */}

                                        <ListItem button className={""}
                                        onClick = {event=>this.suspended(event)}
                                        >
                                            <ListItemIcon>

                                            </ListItemIcon>
                                            <ListItemText primary="suspend" />
                                        </ListItem>
                                        {/* item 1 */}

                                        <ListItem button className={""}
                                        onClick ={event=>this.paymentRequest(event)}
                                        >
                                            <ListItemIcon>

                                            </ListItemIcon>
                                            <ListItemText primary="Payment Request" />
                                        </ListItem>
                                        {/* item 1 */}

                                        <ListItem button className={""}>
                                            <ListItemIcon>

                                            </ListItemIcon>
                                            <ListItemText primary="Social Post Report" />
                                        </ListItem>
                                        {/* item 1 */}

                                        <ListItem button 
                                         onClick = {event=>this.PostPage(event)}
                                        className={""}>
                                            <ListItemIcon>

                                            </ListItemIcon>
                                            <ListItemText primary="Post" />
                                        </ListItem>
                                    </List>
                                </Collapse>
                               
                                </MuiThemeProvider>
                                {/* item 2 in shown in list ========================================*/}
                                <Divider style={{ backgroundColor: "gray" }} />

                                <ListItem button onClick = {event=>this.queries(event)}>

                                    <ListItemIcon >

                                    </ListItemIcon>
                                    <ListItemText primary="Queries" />
                                </ListItem>

                                <ListItem button 
                                onClick = {event=>this.AdminMessage(event)}>

                                    <ListItemIcon >

                                    </ListItemIcon>
                                    <ListItemText primary="Admin Message" />
                                </ListItem>

                                

                        </List>
                        </MuiThemeProvider>
                    </Drawer>
                </MuiThemeProvider>
            </div>
                )
            }
        }
        
        export default DrawerList
        
        
