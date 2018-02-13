import React, { Component } from 'react'
import Sidebar from './src/components/Sidebar'
import Content from './src/components/Content'

class Index extends Component {
  render() {
    return (
      <div id="wrapper">
        <div className="overlay"></div>
        <Sidebar />
        <Content />
      </div>
    )
  }
}

export default Index
