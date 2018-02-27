import React, { Component } from "react"

class Actions extends Component {
  render() {
    return(
      <div>
        <button type="button" className="btn btn-default btn-circle dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="true">
          <img src="../../../public/img/action-btn.svg" />
        </button>
        <ul className="dropdown-menu dropdown-flux" role="menu">
          <li role="presentation">
            <a role="menuitem">cancelar fluxo</a>
          </li>
        </ul>
        <br />
        <br />
        <code>
          button.btn.btn-default.btn-circle.dropdown-toggle(type="button", data-toggle="dropdown", aria-expanded="true") <br />
          &nbsp; img(src="../../../public/img/action-btn.svg")<br />
          ul.dropdown-menu.dropdown-flux(role="menu")<br />
          &nbsp; li(role="presentation") <br />
          &nbsp;&nbsp; a(role="menuitem") cancelar fluxo <br />
        </code>
      </div>
    )
  }
}

export default Actions
