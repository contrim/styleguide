import React, { Component } from 'react'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import ButtonsPage from './pages/Buttons'
import DevTools from './pages/DevTools'
class Content extends Component {
  render() {
    return(
      <HashRouter>
        <div id="page-content-wrapper">
            <button type="button" className="hamburger is-closed" data-toggle="offcanvas">
                <span className="hamb-top"></span>
    			<span className="hamb-middle"></span>
  			<span className="hamb-bottom"></span>
            </button>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2">
                        <Route path="/components/button" component={ButtonsPage}/>
                        <Route path="/devtools/tools" component={DevTools}/>
                    </div>
                </div>
            </div>
        </div>
      </HashRouter>
    )
  }
}

export default Content
