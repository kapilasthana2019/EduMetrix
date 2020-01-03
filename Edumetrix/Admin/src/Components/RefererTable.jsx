import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';


class RefererTable extends Component{


    render(){
        return(
            <div className = "pop-up-container">
               <table id="table" className="table table-striped table-bordered detail-view">
               <tr>
                            <th>Student Created Date</th>
                            <td>2019-12-25 15:01:35</td>
                 </tr>
                 <tr>
                    
                            <th>Chat History</th>
                            <td>
                            <Tooltip title = "view chat history">
                               <Button
                               variant="contained"
                               id ="chat-history-btn"
                               >
                                Click Here
                               </Button>
                               </Tooltip>
                            </td>
                 </tr>
                
               </table>
            </div>
        )
    }
}

export default RefererTable