import React, { Component } from 'react'

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
                <div className="pure-checkbox">
                  <input type='checkbox' name='check' id='check' />
                  <label htmlFor='check'> label check</label>
                </div>
                <br />
                <br />
                <p>Code</p>
                <code>
                .pure-checkbox<br />
                &nbsp; input(type='checkbox', name='check', id='check')<br />
                &nbsp; label(htmlFor='check') label check
                </code>
              </div>
            </div>{/* /normal checkbox */}
            <br />
            <br />

            <h3>disabled checkbox</h3>
            <div className="panel panel-default">
              <div className="panel-body">
                <div className="pure-checkbox">
                  <input type='checkbox' name='checkDisabled' id='checkDisabled' disabled />
                  <label htmlFor='checkDisabled'> label disabled check</label>
                </div>
                <br />
                <br />
                <p>Code</p>
                <code>
                .pure-checkbox<br />
                &nbsp; input(type='checkbox', name='checkDisabled', id='checkDisabled')<br />
                &nbsp; label(htmlFor='checkDisabled') label disabled check
                </code>
              </div>
            </div>{/* /disabled checkbox */}
            <br /><br />
        </div>
    </div>
    )
  }
}

export default CheckboxesPage