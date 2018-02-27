import React, { Component } from 'react'
import DropdownButton from './Dropdown'
import StepsButton from './Steps'
import DropdownDefault from './DropdownDefault'
class ButtonsPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2">
            <h1>_buttons</h1>
            <p>dropdown button</p>
            <DropdownDefault />
            <br />
            <br />
            <p>steps button</p>
            <StepsButton />
            <br />
            <br />
            <p>dropdown button</p>
            <DropdownButton />
        </div>
    </div>
    )
  }
}

export default ButtonsPage
