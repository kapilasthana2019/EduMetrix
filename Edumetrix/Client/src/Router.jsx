import React from 'react'
import {  BrowserRouter, Route} from 'react-router-dom'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import GetStarted from './Components/GetStarted'
const Routers = () => (

    <BrowserRouter>

        <div>
            <switch>
            <Route path="/" component={Login} exact={true} />
            <Route path ="/signUp" component = {SignUp} exact = {true}/>
            <Route path ="/GetStarted" component = {GetStarted} exact = {true}/>
            
            </switch>

        </div>
    </BrowserRouter>


)

export default Routers