import React, { Component } from 'react'
import '../CssFiles/StudentRecord.css'
import Tooltip from '@material-ui/core/Tooltip';
import PostPageTable from './PostPageTable'



class PostPage extends Component {

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
                        Post Page
                     </div>

                    <div className="content-part">

                        <div id="sub-heading">

                            <div id="showing-pagination">
                                Showing 1-20 of 2,745 items.
                         </div>
                        </div>

                        <div>
                            <PostPageTable props = {this.props}/>
                        </div>

                    </div>
                </div>


            </div>
        )
    }
}

export default PostPage