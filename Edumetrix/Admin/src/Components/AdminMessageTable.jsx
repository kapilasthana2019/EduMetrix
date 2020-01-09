import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import '../CssFiles/StudentRecord.css'
import Tooltip from '@material-ui/core/Tooltip';
import ManageEditPopup from './ManageEditPopup'


class AdminMessageTable extends Component {

    
    constructor(props) {
       
        super(props)

        this.state = {
            posts: [],
            editPopup:false,
            editRowData:""
        }
    }

    componentDidMount() {

        const url = "https://jsonplaceholder.typicode.com/posts"

        fetch(url, {
            method: "GET"
        }).then(response => response.json()).then(posts => {

            this.setState({
                posts: posts
            })


        })
    }

    columnClicked = (id) => {
        console.log("column click",id);
    }


    setEditOpen = ()=>{
       
        this.setState({
            editPopup: !this.state.editPopup
        })
        
        console.log("edit button");
        
    }

    editButton =(event,props)=>{
        // console.log("event",props.original);
        this.setEditOpen()

        this.setState({
            editRowData:props.original
        })

    }

    render() {

        const columns = [

            {
                headerStyle: {
                  
                    borderRight:"1px solid lightGray",
                    padding: '15px',
                    height:40,
                    backgroundColor:"white",
                    },
                Header: "#",
                accessor: "userId",
                filterable: false,
                style: {
                    borderRight:"1px solid lightGray",
                    color: "black",
                    textAlign: "centre",
                    fontSize: "14px",

                },
                width: 40,
            }
            ,
            {
                headerStyle: {
                    borderBottom:"1px solid lightGray",
                    borderRight:"1px solid lightGray",
                    color:"#3c8dbc",
                    fontWeight:"bold",
                    fontSize:"14px",
                    padding:"10px",
                    backgroundColor:"white",
                    whiteSpace:"unset"
                    },
                Header: "Admin Message",
                accessor: "id",
                style: {
                    borderRight:"1px solid lightGray",
                    
                    fontSize: "16px",
                     
                },
                width: 550,
            },
            {

                headerStyle: {
                    borderBottom:"1px solid lightGray",
                    borderRight:"1px solid lightGray",
                    color:"#3c8dbc",
                    fontWeight:"bold",
                    fontSize:"14px",
                    padding:"10px",
                    backgroundColor:"white",
                    whiteSpace:"unset"
                    },
                Header: "Created At",
                accessor: "title",

                style: {
                    borderRight:"1px solid lightGray",
                    color: "black",
                    textAlign: "left",
                    fontSize: "14px",
                    whiteSpace:"unset"
                },
                width: 350,
                sortable: false,  
            },
            {
                headerStyle: {
                    borderBottom:"1px solid lightGray",
                    borderRight:"1px solid lightGray",
                    color:"black",
                    fontWeight:"bold",
                    fontSize:"14px",
                    padding:"10px",
                    backgroundColor:"white",
                    },
                Header: "Actions",
                Cell: props => {
                    return (
                        <div>
                            <Tooltip title = "View">
                            <button className="editButton" onClick ={event=>this.editButton(event,props)}>
                                <img src ={require('../Assets/eye.png')} id="docIcon"/>
                            </button>
                            </Tooltip>
                            <Tooltip title = "Update">
                            <button className="editButton" onClick ={event=>this.editButton(event,props)}>
                                <img src ={require('../Assets/pencil.png')} id="docIcon"/>
                            </button>
                            </Tooltip>

                            <Tooltip title = "Delete">
                            <button className="editButton">
                                 <img src ={require('../Assets/delete.png')} id="docIcon"/>
                            </button>
                            </Tooltip>
                        </div>


                    )
                },width: 90
                ,
                 filterable: false
            }



        ]
        return (
            <div style={{padding:"5px"}}>
            <ReactTable
                columns={columns}
                noDataText={"please wait..."}
                data={this.state.posts}
                filterable
                defaultPageSize={10}
                
                // className="highlight"
                getTrProps={(state, rowInfo, column) => {

                    if (rowInfo) {
                        return {

                            style: {
                                background: (rowInfo.row.id) % 2 ? 'white' : 'light',                                
                            }
                        }
                    }
                    return {};
                }}
            >
            </ReactTable>

            {(this.state.editPopup) ? <ManageEditPopup
            props = {this.props}
            open ={this.state.editPopup}
            refreshEdit={this.setEditOpen}
            data ={this.state.editRowData}/>:""}
            </div>
        )
    }
}

export default AdminMessageTable