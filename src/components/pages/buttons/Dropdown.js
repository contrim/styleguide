import React, { Component } from "react"
class DropdownButton extends Component {
  render(){
    return(
      <div>
        <button className="btn btn-flux-primary pull-left dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="true">
        novo &nbsp;
        <i className="fas fa-caret-down"></i>
        </button>
        <ul className="dropdown-menu dropdown-flux" role="menu">
          <li role="presentation">
            <a role="menuitem">ALUF</a>
            <a role="menuitem">AVCB</a>
            <a role="menuitem">Ação renovatória</a>
          </li>
        </ul>
        <br />
        <br />
        <br />
        <code>
          button.btn.btn-flux.dropdown-toggle(type="button", data-toggle="dropdown", aria-expanded="true") <br />
          &nbsp; novo<br />
          &nbsp; i.fas.fa-caret-down<br />
          ul.dropdown-menu.dropdown-flux(role="menu")<br />
          &nbsp; li(role="presentation") <br />
          &nbsp;&nbsp; a(role="menuitem") ALUF <br />
          &nbsp;&nbsp; a(role="menuitem") AVCB <br />
          &nbsp;&nbsp; a(role="menuitem") Ação renovatória
        </code>
      </div>

    )
  }
}

export default DropdownButton
