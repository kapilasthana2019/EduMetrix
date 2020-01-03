import React from 'react'
import {  BrowserRouter, Route} from 'react-router-dom'
import Dashboard from '../src/Components/Dashboard'
import studentManage from './Components/StudentRecords'
import studentRequest from './Components/StudentRequest'
import suspended from './Components/Suspended'
import paymentRequest from './Components/PaymentRequest'
import queries from './Components/Queries'

const AdminRouter = () => (

    <BrowserRouter>

        <div>
            <switch>
            {/* <Route path="/" component={Dashboard} exact={true}/> */}
             <Route path="/Dashboard" component={Dashboard} />
             {/* <Route path="/Dashboard/main" component={Dashboard}  /> */}
             <Route path="/Dashboard/studentManage" component={studentManage}  />
            <Route path = "/Dashboard/studentRequest" component ={studentRequest}/>
            <Route path = "/Dashboard/suspended" component = {suspended} />
            <Route path = "/Dashboard/paymentRequest" component = {paymentRequest}/>
           <Route path ="/Dashboard/queries" component = {queries}/>
           
            </switch>

        </div>
    </BrowserRouter>


)

export default AdminRouter