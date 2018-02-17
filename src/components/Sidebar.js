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
                <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown">components_ <span className="caret"></span></NavLink>
                <ul className="dropdown-menu" role="menu">
                  <li className="dropdown-header">user interface</li>
                  <li><NavLink to="/components/button">buttons</NavLink></li>
                  <li><NavLink to="/components/agenda"> agenda react component</NavLink></li>
                  <li><NavLink to="#">cards</NavLink></li>
                  <li><NavLink to="#">drag & drop</NavLink></li>
                  <li><NavLink to="#">input fields</NavLink></li>
                  <li><NavLink to="#">loader</NavLink></li>
                  <li><NavLink to="#">navigation</NavLink></li>
                  <li><NavLink to="#">notification</NavLink></li>
                  <li><NavLink to="#">pagination</NavLink></li>
                  <li><NavLink to="/components/checkboxes">checkboxes</NavLink></li>
                  <li><NavLink to="#">radio button</NavLink></li>

                </ul>
              </li>
              <li className="dropdown">
                <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown">developer.guide_ <span className="caret"></span></NavLink>
                <ul className="dropdown-menu" role="menu">
                  <li className="dropdown-header">stack & dev tools</li>
                  <li><NavLink to="/devtools/tools">tools</NavLink></li>
                  <li><NavLink to="/devtools/stack">stack</NavLink></li>
                  <li><NavLink to="#">infra</NavLink></li>
                  <li><NavLink to="/devtools/models">model</NavLink></li>
                  <li><NavLink to="#">development process</NavLink></li>
                  <li><NavLink to="#">best practices</NavLink></li>
                  <li><NavLink to="#">utils & helpers</NavLink></li>
                  <li><NavLink to="#">tests</NavLink></li>
                  <li><NavLink to="#">configuring Robomongo</NavLink></li>
                </ul>
              </li>
              <li className="dropdown">
                <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown">projects_ <span className="caret"></span></NavLink>
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
