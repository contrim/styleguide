import React, { Component } from 'react'
import Modals from '../ui/Modals'
class ModalPage extends Component {
  render() {
    return(
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2">
            <h1>modals_</h1>
            <p>description of modals component</p>
            <h3>transactional</h3>
            <Modals />
            <br />
            <br />

            <h3>passive</h3>


            <br /><br />

        </div>
      </div>
    )
  }
}

export default ModalPage
