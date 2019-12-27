import React, { Component } from 'react'

import Header2 from './Header2'


class Dashboard extends Component {

    render() {
        return (
            <div>
              
                <Header2 props = {this.props}/>
            </div>
        )
    }
}

export default Dashboard