import React, { Component } from "react"
class HeaderButtons extends Component {
  render() {
    return(
      <div>
        <button className="btn btn-md btn-default btn-linte btn-primary btn-new-document dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="true">
          Gerar Documento &nbsp;
          <i className="fas fa-caret-down"></i>
        </button>
        <ul className="dropdown-menu dropdown-menu-right" role="menu">
          <li role="presentation">
            <a className="btn-status btn-edit-template" role="menuitem">Documento Principal</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default HeaderButtons
