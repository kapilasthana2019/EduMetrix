import React, { Component } from 'react'
import ReactTable from 'react-table'
import RequestTablePopup from './RequestTablePopup'
import Tooltip from '@material-ui/core/Tooltip';
import 'react-table/react-table.css'
import '../CssFiles/StudentRecord.css'


class StudentRequestTable extends Component {

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
    }

    editButton = (event, props) => {

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
                    color: "#3c8dbc",
                    fontWeight: "bold",
                    fontSize: "14px",
                    padding: "10px",
                    backgroundColor: "white",
                    whiteSpace: "unset"
                },
                Header: "First Name",
                accessor: "id",

                style: {
                    borderRight: "1px solid lightGray",
                    color: "#3c8dbc",
                    fontSize: "16px",
                    cursor: "pointer",

                },
                Cell: props => {

                    return (
                        <div onClick={() => {
                            console.log("props original", props.original);
                            this.columnClicked(props.row._index)
                        }}>{props.value}</div>
                    )
                }
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
                Header: "Last Name",
                accessor: "title",

                style: {
                    borderRight: "1px solid lightGray",
                    color: "black",
                    textAlign: "left",
                    fontSize: "14px",
                    whiteSpace: "unset"

                },
                sortable: false,

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

                Header: "Phone",
                accessor: "body",
                style: {
                    borderRight: "1px solid lightGray",
                    color: "black",
                    textAlign: "left",
                    fontSize: "14px",
                    whiteSpace: "unset"
                },
                sortable: false,
                width: 170
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
                    color: "#3c8dbc",
                    fontWeight: "bold",
                    fontSize: "14px",
                    padding: "10px",
                    backgroundColor: "white",
                    whiteSpace: "unset"
                },
                Header: "Login Bonus",
                accessor: "bonus",
                style: {
                    borderRight: "1px solid lightGray",
                    color: "black",
                    textAlign: "left",
                    fontSize: "14px",
                    whiteSpace: "unset"
                },
                minWidth: 100
            },
            {
                headerStyle: {
                    borderBottom: "1px solid lightGray",
                    borderRight: "1px solid lightGray",
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "14px",
                    padding: "10px",
                    backgroundColor: "white",
                    whiteSpace: "unset"
                },
                Header: "Referrer Name",
                accessor: "ReferName",
                filterable: false,
                style: {
                    borderRight: "1px solid lightGray",
                    color: "black",
                    textAlign: "left",
                    fontSize: "14px",
                    whiteSpace: "unset"
                },
                minWidth: 100
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
                accessor: "created_on",

                style: {
                    borderRight: "1px solid lightGray",
                    color: "black",
                    textAlign: "left",
                    fontSize: "14px",
                    whiteSpace: "unset"
                },
                sortable: true,
                minWidth: 100

            },
            {
                headerStyle: {
                    borderBottom: "1px solid lightGray",
                    borderRight: "1px solid lightGray",
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "14px",
                    padding: "10px",
                    backgroundColor: "white",
                },
                Header: "Actions",
                Cell: props => {
                    return (
                        <div>
                            <Tooltip title="edit">
                                <button
                                    onClick={event => this.editButton(event, props)}
                                    className="editButton">
                                    <img src={require('../Assets/pencil.png')} id="docIcon" />
                                </button>
                            </Tooltip>

                            <Tooltip title="Delete">
                                <button className="editButton">
                                    <img src={require('../Assets/delete.png')} id="docIcon" />
                                </button>
                            </Tooltip>
                        </div>


                    )
                }, width: 90
                ,
                filterable: false
            }



        ]
        return (
            <div style={{ padding: "5px" }}>
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

                {(this.state.editPopup) ?

                    <RequestTablePopup
                        props={this.props}
                        open={this.state.editPopup}
                        refreshEdit={this.setEditOpen}
                        data={this.state.editRowData}
                    />
                    : ""}
            </div>
        )
    }
}

export default StudentRequestTable