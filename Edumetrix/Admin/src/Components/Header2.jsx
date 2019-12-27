import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DrawerList from './DrawerList'
import '../CssFiles/Header.css'


class Header2 extends Component {

constructor(props){
    super(props)
    
    this.state={
        menuToggle : false
    }
}
menuToggleManage = async(event)=>{
   
   await this.setState({
        menuToggle: !this.state.menuToggle
    })


    localStorage.setItem('menuToggle',this.state.menuToggle)

}

    render() {

        console.log("state change",this.state.menuToggle);
        
        return (
            <div>
                <AppBar position="fixed">
                    <Toolbar className="toolbar">
                       
                        <IconButton edge="start"
                            onClick = {event=>this.menuToggleManage(event)}
                            className={""}
                            color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <div style={{
                            display: "flex",
                            backgroundColor: "  ",
                            flexDirection: "row",
                            width: "100%", justifyContent: "space-between"
                        }}>
                            <div>
                                <Typography variant="h4">
                                    Edumetrix
                       </Typography>
                            </div>
                            <Button color="inherit">Logout</Button>       
                        </div>
                    </Toolbar>
                </AppBar>
                
                {(this.state.menuToggle) ? <DrawerList props = {this.props} 
                open = {this.state.menuToggle}/>:<DrawerList props = {this.props} 
                open = {this.state.menuToggle}/>}


            </div>
        )
    }
}

export default Header2