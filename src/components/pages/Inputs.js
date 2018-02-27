import React, { Component } from "react"
class InputsPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2">
            <h1>inputs_</h1>
            <p>description of inputs component</p>
            <div className="form-group">
              <label className="control-label" for="email">e-mail</label>
              <input className="form-control" type="text" name="email" id="email" placeholder="e-mail" required="true"/>
            </div>
            <br />
            <br />
            <code>
            .form-group <br />
            &nbsp; input.form-control(type='text', name='email', id='email', placeholder='email', required)<br />
            &nbsp; label.control-label(for='email') email
            </code>
            <br />
            <br />

        </div>
      </div>
    )
  }
}

export default InputsPage
