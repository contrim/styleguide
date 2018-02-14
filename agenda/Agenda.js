import React, { Component } from 'react'
import TopBlocks from './component/TopBlocks'
import Sidebar from './component/Sidebar'
import Body from './component/Body'
import CalendarMini from './component/CalendarMini'
class Agenda extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <div className="dashboardCompanyContent">
              <h1>_agenda</h1>
              <h4> component TopBlocks </h4>
              <TopBlocks today='19' tomorrow='5' thisWeek='36' thisMonth='87'/>
              <code>&lt;TopBlocks today='19' tomorrow='5' thisWeek='36' thisMonth='87'/&gt;</code>
              <br />
              <br />
              <h4> component calendarMini </h4>
              <CalendarMini />
              <code>&lt;CalendarMini /&gt;</code>
              <br />
              <br />
              <h4> component Body </h4>
              <Body />
              <code>&lt;Body data='null'/&gt;</code>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Agenda
