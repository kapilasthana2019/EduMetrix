import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import Slide from '@material-ui/core/Slide';
import { makeStyles, useTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme, Tabs, Tab, AppBar } from '@material-ui/core';
import '../CssFiles/editpopup.css'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="Down" ref={ref} {...props} />;
});

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

class EditPopUp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            open: this.props.open,
            tabValue: 0
        }
    }

    handleChange = (event) => {


    };

    handleChangeIndex = (index) => {
        // setValue(index);
      };

    style() {

        const useStyles = createMuiTheme((
            {

                overrides: {
                    // .MuiDialog-scrollPaper
                    MuiDialog: {

                        scrollPaper: {
                            marginTop: "40px",
                            alignItems: 'baseline'
                        }
                    }
                }
            }));

        return useStyles
    }

    componentDidMount() {

        // this.props.HandleClose()
    }
    render() {

        console.log("popup ", this.props);

        return (

            <div>

                <MuiThemeProvider theme={this.style()}>
                    <Dialog open={this.state.open}>

                        <div className="document-upload">
                            <div className="edit-subcontainer">
                                Upload Media
                </div>
                            <hr />

                           
                        </div>
                    </Dialog>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default EditPopUp