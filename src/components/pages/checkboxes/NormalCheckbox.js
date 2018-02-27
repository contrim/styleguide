import React, { Component } from "react"
class NormalCheckbox extends Component {
  render() {
    return(
      <div>
        <div className="pure-checkbox">
          <input type='checkbox' name='check' id='check' />
          <label htmlFor='check'> label check</label>
        </div>
        <code>
        .pure-checkbox<br />
        &nbsp; input(type='checkbox', name='check', id='check')<br />
        &nbsp; label(htmlFor='check') label check
        </code>
        <br />
        <br />
        <div className="pure-checkbox">
          <input type='checkbox' name='checkDisabled' id='checkDisabled' disabled />
          <label htmlFor='checkDisabled'> label disabled check</label>
        </div>
        <code>
        .pure-checkbox<br />
        &nbsp; input(type='checkbox', name='checkDisabled', id='checkDisabled')<br />
        &nbsp; label(htmlFor='checkDisabled') label disabled check
        </code>
      </div>
    )
  }
}

export default NormalCheckbox
