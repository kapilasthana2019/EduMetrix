import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import '../CssFiles/StudentRecord.css'



class PostPageTable extends Component {


    constructor(props) {

        super(props)

        this.state = {
            posts: [],
            editPopup: false,
            editRowData: ""
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
        console.log("column click", id);
    }


    setEditOpen = () => {

        this.setState({
            editPopup: !this.state.editPopup
        })

        console.log("edit button");

    }

    editButton = (event, props) => {
        // console.log("event",props.original);
        this.setEditOpen()

        this.setState({
            editRowData: props.original
        })

    }

    render() {

        const columns = [

            {
                headerStyle: {

                    borderRight: "1px solid lightGray",
                    padding: '15px',
                    height: 40,
                    backgroundColor: "white",
                },
                Header: "#",
                accessor: "userId",
                filterable: false,
                style: {
                    borderRight: "1px solid lightGray",
                    color: "black",
                    textAlign: "centre",
                    fontSize: "14px",

                },
                width: 40,
            }
            ,
          
            {
                headerStyle: {
                    borderBottom: "1px solid lightGray",
                    borderRight: "1px solid lightGray",
                    // color:"#3c8dbc",
                    fontWeight: "bold",
                    fontSize: "14px",
                    padding: "10px",
                    backgroundColor: "white",
                    whiteSpace: "unset"
                },
                
                Header: "Posted By",
                accessor: "id",

                style: {
                    borderRight: "1px solid lightGray",
                    // color: "#3c8dbc",
                    fontSize: "16px",
                    cursor: "pointer",

                }, 
            },
            
            {
                headerStyle: {
                    borderBottom: "1px solid lightGray",
                    borderRight: "1px solid lightGray",
                    // color: "#3c8dbc",
                    fontWeight: "bold",
                    fontSize: "14px",
                    padding: "10px",
                    backgroundColor: "white",
                    whiteSpace: "unset"
                },
               
                Header: "Email",
                accessor: "email",
                style: {
                    borderRight: "1px solid lightGray",
                    color: "black",
                    textAlign: "left",
                    fontSize: "14px",
                    whiteSpace: "unset"

                },
                width: 180
            },
            {
                headerStyle: {
                    borderBottom: "1px solid lightGray",
                    borderRight: "1px solid lightGray",
                    // color: "#3c8dbc",
                    fontWeight: "bold",
                    fontSize: "14px",
                    padding: "10px",
                    backgroundColor: "white",
                    whiteSpace: "unset"
                },
                Header: "No of Posts",
                accessor: "bonus",
                style: {
                    borderRight: "1px solid lightGray",
                    color: "black",
                    textAlign: "left",
                    fontSize: "14px",
                    whiteSpace: "unset"
                },
            },
            {
                headerStyle: {
                    borderBottom: "1px solid lightGray",
                    borderRight: "1px solid lightGray",
                    color: "#3c8dbc",
                    fontWeight: "bold",
                    fontSize: "14px",
                    padding: "10px",
                    backgroundColor: "white",
                    whiteSpace: "unset"
                },
                Header: "Created On",
                accessor: "ReferName",
            
                style: {
                    borderRight: "1px solid lightGray",
                    color: "black",
                    textAlign: "left",
                    fontSize: "14px",
                    whiteSpace: "unset"
                },
            },
        ]
        return (
            <div style={{ padding: "5px" }}>
                <ReactTable
                    columns={columns}
                    noDataText={"please wait..."}
                    data={this.state.posts}
                    filterable
                    defaultPageSize={5}

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

export default PostPageTable