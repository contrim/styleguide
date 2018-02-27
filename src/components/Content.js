import React, { Component } from 'react'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import ButtonsPage from './pages/buttons/Index'
import Notifications from './pages/notifications/Index'
import CheckboxesPage from './pages/checkboxes/Index'
import DevTools from './pages/guide/DevTools'
import IndexPage from './pages/IndexPage'
import StackPage from './pages/guide/Stack'
import ModelsPage from './pages/guide/Models'
import Agenda from '../../agenda/Agenda'
import ModalsPage from './pages/guide/Modal'
import InputsPage from './pages/Inputs'
import TabsPage from './pages/tabs/Index'
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
                        <Route path="/components/tabs" component={TabsPage}/>
                        <Route path="/components/inputs" component={InputsPage}/>
                        <Route path="/components/notifications" component={Notifications}/>
                    </div>
                </div>
            </div>
        </div>
      </HashRouter>
    )
  }
}

export default Content
