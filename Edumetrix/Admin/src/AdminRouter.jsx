import React from 'react'
import {  BrowserRouter, Route} from 'react-router-dom'
import Dashboard from '../src/Components/Dashboard'
import studentManage from './Components/StudentRecords'
import studentRequest from './Components/StudentRequest'
import suspended from './Components/Suspended'
import paymentRequest from './Components/PaymentRequest'
import queries from './Components/Queries'
import chatHistory from './Components/ChatHistory'
import postPage from './Components/PostPage'
import adminMessage from './Components/AdminMessage'

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
           <Route path ="/Dashboard/chatHistory" component = {chatHistory}/>
           <Route path = "/Dashboard/PostPage" component = {postPage}/>
           <Route path = "/Dashboard/AdminMessage" component = {adminMessage}/>
            </switch>

        </div>
    </BrowserRouter>


)

export default AdminRouter