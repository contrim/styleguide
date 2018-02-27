import React, { Component } from 'react'
import DropdownButton from './Dropdown'
import StepsButton from './Steps'
import DropdownDefault from './DropdownDefault'
import Actions from './Actions'
import HeaderButtons from './Header'
class ButtonsPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2">
            <h1>_buttons</h1>
            <h3>dropdown button</h3>
            <div className="panel panel-default">
              <div className="panel-body ">
                <DropdownDefault />
              </div>
            </div>
            <h3>steps button</h3>
            <div className="panel panel-default">
              <div className="panel-body ">
                <StepsButton />
              </div>
            </div>
            <h3>dropdown button</h3>
            <div className="panel panel-default">
              <div className="panel-body ">
                <DropdownButton />
              </div>
            </div>
            <h3>actions button</h3>
            <div className="panel panel-default">
              <div className="panel-body ">
                <Actions />
              </div>
            </div>
            <h3>header buttons</h3>
            <div className="panel panel-default">
              <div className="panel-body ">
                <HeaderButtons />
              </div>
            </div>
        </div>
    </div>
    )
  }
}

export default ButtonsPage
