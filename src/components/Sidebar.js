import React, { Component } from 'react'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <HashRouter>
        <nav className="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
          <ul className="nav sidebar-nav">
              <li className="sidebar-brand">
                  <NavLink to="/">
                     linte_
                  </NavLink>
              </li>
              <li className="dropdown">
                <NavLink className="sublink" to="#" className="dropdown-toggle" data-toggle="dropdown">components_ <span className="caret"></span></NavLink>
                <ul className="dropdown-menu" role="menu">
                  <li className="dropdown-header">user interface</li>
                  <li><NavLink className="sublink" to="/components/button" data-toggle="offcanvas">buttons</NavLink></li>
                  <li><NavLink className="sublink" to="/components/checkboxes" data-toggle="offcanvas">checkboxes</NavLink></li>
                  <li><NavLink className="sublink" to="/components/notifications" data-toggle="offcanvas">notifications</NavLink></li>
                  <li><NavLink className="sublink" to="/components/agenda" data-toggle="offcanvas"> agenda react component</NavLink></li>
                </ul>
              </li>
              <li className="dropdown">
                <NavLink className="sublink" to="#" className="dropdown-toggle" data-toggle="dropdown">projects_ <span className="caret"></span></NavLink>
                <ul className="dropdown-menu" role="menu">
                  <li><a href="https://github.com/linte/meteor-linte" target='_blank'>_app</a></li>
                  <li><a href="https://github.com/linte/lambda" target='_blank'>_lambda</a></li>
                  <li><a href="https://github.com/linte/linte-dashboard" target='_blank'>_dashboard</a></li>
                  <li><a href="https://github.com/linte/admin" target='_blank'>_admin</a></li>
                  <li><a href="https://github.com/linte/linte_home" target='_blank'>_site</a></li>
                  <li><a href="https://github.com/linte/linte-invenis-lambda" target='_blank'>_invenislambda</a></li>
                  <li><a href="https://github.com/linte/linte-file-import" target='_blank'>_ftp</a></li>
                </ul>
              </li>
              <li>
                  <a href="https://github.com/PauloMarceloNogueira/styleguide">Fork me</a>
              </li>
          </ul>
        </nav>
      </HashRouter>
    )
  }
}

export default Sidebar
