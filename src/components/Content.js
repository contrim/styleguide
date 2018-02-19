import React, { Component } from 'react'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import ButtonsPage from './pages/Buttons'
import DevTools from './pages/DevTools'
import IndexPage from './pages/IndexPage'
import StackPage from './pages/Stack'
import ModelsPage from './pages/Models'
import Agenda from '../../agenda/Agenda'
import CheckboxesPage from './pages/Checkboxes'
import ModalsPage from './pages/Modal'
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
                        <Route exact path="/" component={IndexPage}/>
                        <Route path="/components/checkboxes" component={CheckboxesPage}/>
                        <Route path="/components/button" component={ButtonsPage}/>
                        <Route path="/components/agenda" component={Agenda}/>
                        <Route path="/devtools/stack" component={StackPage}/>
                        <Route path="/devtools/tools" component={DevTools}/>
                        <Route path="/devtools/models" component={ModelsPage}/>
                        <Route path="/components/modals" component={ModalsPage}/>
                    </div>
                </div>
            </div>
        </div>
      </HashRouter>
    )
  }
}

export default Content
