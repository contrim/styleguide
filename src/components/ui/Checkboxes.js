import React, { Component } from 'react'

class Checkboxes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      label: "",
      name: "",
      disabled: false
    }
  }
  componentDidMount() {
    console.log(this.props,'PROPS');
    this.setState({
      label: this.props.label,
      name: this.props.name,
      disabled: this.props.disabled
    })
  }
  render() {
    return(
      <div className="pure-checkbox">
        <input key={this.state.name} type='checkbox' name='check' id={this.state.name} disabled={this.props.disabled} />
        <label htmlFor={this.state.name}> {this.state.label}</label>
      </div>
    )
  }
}

export default Checkboxes
