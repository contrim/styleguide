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
                  <NavLink to="#">
                     linte_
                  </NavLink>
              </li>
              <li className="dropdown">
                <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown">components_ <span className="caret"></span></NavLink>
                <ul className="dropdown-menu" role="menu">
                  <li className="dropdown-header">user interface</li>
                  <li><NavLink to="/components/button">buttons</NavLink></li>
                  <li><NavLink to="#">cards</NavLink></li>
                  <li><NavLink to="#">checkbox</NavLink></li>
                  <li><NavLink to="#">drag & drop</NavLink></li>
                  <li><NavLink to="#">input fields</NavLink></li>
                  <li><NavLink to="#">loader</NavLink></li>
                  <li><NavLink to="#">navigation</NavLink></li>
                  <li><NavLink to="#">notification</NavLink></li>
                  <li><NavLink to="#">pagination</NavLink></li>
                  <li><NavLink to="#">radio button</NavLink></li>

                </ul>
              </li>
              <li className="dropdown">
                <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown">developer.guide_ <span className="caret"></span></NavLink>
                <ul className="dropdown-menu" role="menu">
                  <li className="dropdown-header">stack && dev tools</li>
                  <li><NavLink to="/devtools/tools">tools</NavLink></li>
                  <li><NavLink to="#">stack</NavLink></li>
                  <li><NavLink to="#">infra</NavLink></li>
                  <li><NavLink to="#">model</NavLink></li>
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
                  <li><NavLink to="#">_app</NavLink></li>
                  <li><NavLink to="#">_lambda</NavLink></li>
                  <li><NavLink to="#">_dashboard</NavLink></li>
                  <li><NavLink to="#">_admin</NavLink></li>
                  <li><NavLink to="#">_site</NavLink></li>
                  <li><NavLink to="#">_blog</NavLink></li>
                  <li><NavLink to="#">_ftp</NavLink></li>
                </ul>
              </li>
              <li>
                  <NavLink to="#">Contact</NavLink>
              </li>
              <li>
                  <NavLink to="https://twitter.com/maridlcrmn">Follow me</NavLink>
              </li>
          </ul>
        </nav>
      </HashRouter>
    )
  }
}

export default Sidebar
