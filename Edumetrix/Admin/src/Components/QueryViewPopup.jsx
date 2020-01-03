import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import ViewQueryPopup from './ViewQueryPopup'
import UpdateQeryPopup from './UpdateQeryPopup'
import Slide from '@material-ui/core/Slide';
import { makeStyles, useTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';
import '../CssFiles/QueryPopUp.css'



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="Down" ref={ref} {...props} />;
});

class QueryViewPopup extends Component {


    constructor(props) {
        super(props)

        this.state = {
            open: this.props.open,
            value: this.props.value
        }
    }

    style() {

        const useStyles = createMuiTheme((
         {

                overrides: {
                    // .MuiDialog-scrollPaper
                    MuiDialog: {

                        scrollPaper: {
                            marginTop:"40px",
                            alignItems:'baseline'
                        }
                    }
                }
            }));

        return useStyles
    }

    handleClose = (event) => {

        this.setState({
            open: !this.state.open
        })
        this.props.refresh()
    }

    render() {



        return (

            <div>
                <MuiThemeProvider theme={this.style()}>
                   
                    <Dialog
                        TransitionComponent={Transition}
                        keepMounted
                        open={this.state.open}
                        onClose={event => this.handleClose(event)}
                    >
                        {(this.props.value === "view") ?
                            <ViewQueryPopup
                                data={this.props.data}
                                close = {this.handleClose}
                            /> :
                            <UpdateQeryPopup
                                data={this.props.data}
                                close = {this.handleClose}
                            />}


                    </Dialog>
                </MuiThemeProvider>
            </div>
        )
    }
}


export default QueryViewPopup