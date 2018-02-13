import React, { Component } from 'react'
import CalendarMini from './CalendarMini'
import Filters from './Filters'
class Sidebar extends Component {
  render() {
    return (
      <div>
        <CalendarMini />
        <Filters />
      </div>
    )
  }
}

export default Sidebar
