import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import '../CssFiles/StudentRecord.css'
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';

class SuspendedTable extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: []
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
    render() {

        const columns = [

            {
                headerStyle: {
                  
                    borderRight:"1px solid lightGray",
                    padding: '10px',
                    backgroundColor:"rgb(241, 244, 245)",
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
                    backgroundColor:"rgb(241, 244, 245)",
                    whiteSpace:"unset"
                    },
                Header: "Student Name",
                accessor: "id",
                style: {
                    borderRight:"1px solid lightGray",
                    fontSize: "16px",
                    cursor: "pointer",
                },

                width: 350,
            },
            {

                headerStyle: {
                    borderBottom:"1px solid lightGray",
                    borderRight:"1px solid lightGray",
                    color:"#3c8dbc",
                    fontWeight:"bold",
                    fontSize:"14px",
                    padding:"10px",
                    backgroundColor:"rgb(241, 244, 245)",
                    whiteSpace:"unset"
                    },
                Header: "Payable Amount",
                accessor: "title",

                style: {
                    borderRight:"1px solid lightGray",
                    color: "black",
                    textAlign: "left",
                    fontSize: "14px",
                    whiteSpace:"unset"

                },
                width: 80,
                sortable: false,
               
            },
            {
                headerStyle: {
                    borderBottom:"1px solid lightGray",
                    borderRight:"1px solid lightGray",
                    color:"#3c8dbc",
                    fontWeight:"bold",
                    fontSize:"14px",
                    padding:"10px",
                    backgroundColor:"rgb(241, 244, 245)",
                    whiteSpace:"unset"
                    },

                Header: "Status",
                accessor: "body",
                style: {
                    borderRight:"1px solid lightGray",
                    color: "black",
                    textAlign: "left",
                    fontSize: "14px",
                    whiteSpace:"unset"
                },
                sortable: false,
                width: 80,
            },
            {
                headerStyle: {
                    borderBottom:"1px solid lightGray",
                    borderRight:"1px solid lightGray",
                    color:"#3c8dbc",
                    fontWeight:"bold",
                    fontSize:"14px",
                    padding:"10px",
                    backgroundColor:"rgb(241, 244, 245)",
                    whiteSpace:"unset"
                    },
                Header: "Added Date",
                accessor: "email",
                style: {
                    borderRight:"1px solid lightGray",
                    color: "black",
                    textAlign: "left",
                    fontSize: "14px",
                    whiteSpace:"unset"

                },
                minWidth:160
            },
            {
                headerStyle: {
                    borderBottom:"1px solid lightGray",
                    borderRight:"1px solid lightGray",
                    color:"#3c8dbc",
                    fontWeight:"bold",
                    fontSize:"14px",
                    padding:"10px",
                    backgroundColor:"rgb(241, 244, 245)",
                    whiteSpace:"unset"
                    },
                Header: "Paid Date",
                accessor: "bonus",
                style: {
                    borderRight:"1px solid lightGray",
                    color: "black",
                    textAlign: "left",
                    fontSize: "14px",
                    whiteSpace:"unset"
                },
                minWidth:100
            },
            {
                headerStyle: {
                    borderBottom:"1px solid lightGray",
                    borderRight:"1px solid lightGray",
                    color:"#3c8dbc",
                    fontWeight:"bold",
                    fontSize:"14px",
                    padding:"10px",
                    backgroundColor:"rgb(241, 244, 245)",
                    whiteSpace:"unset"
                    },

                Header: "Lifetime",
                accessor: "ReferName",
                filterable: false,
                style: {
                    borderRight:"1px solid lightGray",
                    color: "black",
                    textAlign: "left",
                    fontSize: "14px",
                    whiteSpace:"unset"
                },
                minWidth:100
            },
            {
                headerStyle: {
                    borderBottom:"1px solid lightGray",
                    borderRight:"1px solid lightGray",
                    color:"black",
                    fontWeight:"bold",
                    fontSize:"14px",
                    padding:"10px",
                    backgroundColor:"rgb(241, 244, 245)",
                    },
                Header: "Actions",
                Cell: props => {
                    return (
                        <div>
                            <Tooltip title = "edit">
                            <button className="editButton">
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
            <ReactTable style={{borderRight:"none",borderLeft:"none"}}
                columns={columns}
                noDataText={"please wait..."}
                data={this.state.posts}
                defaultPageSize={1}   
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
            </div>
        )
    }
}

export default SuspendedTable