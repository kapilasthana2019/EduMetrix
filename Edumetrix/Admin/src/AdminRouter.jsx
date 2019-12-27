import React from 'react'
import {  BrowserRouter, Route} from 'react-router-dom'
import Dashboard from '../src/Components/Dashboard'
import studentManage from './Components/StudentRecords'

const AdminRouter = () => (

    <BrowserRouter>

        <div>
            <switch>
            {/* <Route path="/" component={Dashboard} exact={true}/> */}
             <Route path="/Dashboard" component={Dashboard}  />
             {/* <Route path="/Dashboard/main" component={Dashboard}  /> */}
             <Route path="/Dashboard/studentManage" component={studentManage} exact={true}  />

            </switch>

        </div>
    </BrowserRouter>


)

export default AdminRouter