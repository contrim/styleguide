import React, { Component } from 'react'
import Icon from './Icon'
class ButtonsPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2">
          <h1>_notifications</h1>
          <h3>show notifications</h3>
          <div className="panel panel-default">
            <div className="panel-body ">
              <Icon />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ButtonsPage
