import React, { Component } from 'react'

class ButtonsPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2">
            <h1>_buttons</h1>
            <p>Descrição sobre os components de Buttons</p>
            <button className="btn btn-default pull-left">
              Btn Primary
            </button>
            <br />
            <br />
            <code>
              button.btn.btn-default.pull-left
              <br/>
              &nbsp;| Btn Primary
            </code>
            <br />
            <br />
            <button className="btn btn-default pull-left dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="true">
              Btn Dropdown
              &nbsp;<i className="fas fa-caret-down"></i>
            </button>
            <ul className="dropdown-menu">
              <li className="presentation">
                <a className="btn-export-data" role="menuitem">Informações da Pasta</a>
              </li>
            </ul>
            <br />
            <br />
            <code>
              button.btn.btn-default.pull-left.dropdown-toggle(type="button" data-toggle="dropdown" aria-expanded="true")
              <br />
              &nbsp;| Btn Dropdown
              <br />
              &nbsp;i.fas.fa-caret-down
              <br />
              ul.dropdown-menu
              &nbsp;li.presentation
              <br />
              &nbsp;&nbsp;a.btn-export-data(role="menuitem") Informações da Pasta
            </code>

        </div>
    </div>
    )
  }
}

export default ButtonsPage
