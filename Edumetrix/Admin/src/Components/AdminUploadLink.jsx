import React, { Component } from 'react'
import InputBase from '@material-ui/core/InputBase';
import '../CssFiles/StudentRecord.css'


class AdminUploadLink extends Component {


    constructor(props){
        super(props)
        
        this.state = {
        }

    }

    render() {

        return (

            <div>
                <div className="link-container">
                    <div id="paste-heading">
                        Paste Link
                </div>
                    <div id="link-url">
                        <InputBase id="url"
                            type="text"
                            margin="dense"
                            autoFocus={true}
                            fullWidth
                        />
                    </div>
                </div>

                

            </div>
        )
    }

}

export default AdminUploadLink