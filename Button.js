import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import _ from 'underscore'
class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
      MenuTitle : "",
      SubMenuOptions: "",
      icon: ""
    }
  }

  componentDidMount() {
    this.setState({
      MenuTitle: this.props.title,
      SubMenuOptions: this.props.menu_options,
      icon: this.props.icon
    })
  }

  render() {
    console.log(this.props);
    const lis = this.props.menu_options.map(function(menu){
      return (
        <li role="presentation">
          <a className="btn-status btn-edit-template" role="menuitem" href={menu.url}>{menu.title}</a>
        </li>
      )
    })
    return (
      <div>
        <button className="btn btn-default new_instance_bt dropdown-toggle" title="Nova Pasta" type="button" data-toggle="dropdown" aria-expanded="false">
          <i className={this.state.icon}></i>
          &nbsp;{this.state.MenuTitle}
        </button>
        <ul className="dropdown-menu dropdown-menu-left" role="menu">
          {lis}
        </ul>
      </div>
    )
  }
}

export default Button
