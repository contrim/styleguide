import React, { Component } from "react"
class DropdownDefault extends Component {
  render() {
    return(
      <div>
        <button className="btn btn-default btn-new-document dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="true">
        opções &nbsp;
        <span className="caret"></span>
        </button>
        <ul className="dropdown-menu" role="menu">
          <li role="presentation">
            <a role="menuitem">ALUF</a>
            <a role="menuitem">AVCB</a>
            <a role="menuitem">Ação renovatória</a>
          </li>
        </ul>
        <br />
        <br />
        <code>
          button.btn.btn-default.btn-new-document.dropdown-toggle(type="button", data-toggle="dropdown", aria-expanded="true") <br />
          &nbsp; novo<br />
          &nbsp; span.caret<br />
          ul.dropdown-menu(role="menu")<br />
          &nbsp; li(role="presentation")<br />
          &nbsp;&nbsp;&nbsp; a(role="menuitem") ALUF <br />
          &nbsp;&nbsp;&nbsp; a(role="menuitem") AVCB <br />
          &nbsp;&nbsp;&nbsp; a(role="menuitem") Ação renovatória
        </code>
      </div>
    )
  }
}

export default DropdownDefault
