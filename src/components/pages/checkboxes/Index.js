import React, { Component } from 'react'
import NormalCheckbox from './NormalCheckbox'
// import Checkboxes from '../ui/Checkboxes'
class CheckboxesPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2">
            <h1>checkboxes_</h1>
            <p>description of checkboxes component</p>
            <h3>normal checkbox</h3>
            <div className="panel panel-default">
              <div className="panel-body">
                <NormalCheckbox />
              </div>
            </div>
        </div>
    </div>
    )
  }
}

export default CheckboxesPage
