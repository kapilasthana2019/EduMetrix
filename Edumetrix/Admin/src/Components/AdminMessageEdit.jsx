import React, { Component } from 'react'
import InputBase from '@material-ui/core/InputBase';
import '../CssFiles/StudentRecord.css'

class AdminMessageEdit extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: this.props.data
        }
    }

    render() {
        console.log("in edit", this.state.data);

        return (
            <div>
                <div>
                    {this.state.data.title}
                </div>

           

            </div>
        )
    }
}

export default AdminMessageEdit