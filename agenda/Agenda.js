import React, { Component } from 'react'
import TopBlocks from './component/TopBlocks'
import Sidebar from './component/Sidebar'
import Body from './component/Body'
class Agenda extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <nav className="sidebar">
            <Sidebar />
          </nav>
          <div className="dashboardCompanyContent">
            <TopBlocks today='10' tomorrow='20' thisWeek='129' thisMonth='240'/>
            <Body />
          </div>
        </div>
      </div>
    )
  }
}

export default Agenda
