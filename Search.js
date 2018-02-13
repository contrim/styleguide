import React, { Component } from 'react'


class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      identifier : ""
    }
  }

  componentDidMount() {
    this.setState({
      identifier: this.props.identifier
    })
  }

  render() {
    return (
      <div>
        <a className="btn-id-search btn-notifications dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
          <i className="fas fa-search"></i>
        </a>
        <div className="dropdown-menu dropdown-content" role="menu">
          <div className="dropdown-content-heading">
            Buscar
            <i className="fas fa-caret-down"></i>
          </div>
          <ul className="media-list dropdown-content-body">
            <li>
              <input type="text" className="form-control instanceSearch" placeholder={this.state.identifier} />
              <span className="input-group-btn instanceSearchButton"></span>
            </li>
          </ul>
        </div>
      </div>
      // <div>
      //   <ul>
      //     <li className="dropdown">
      //       <a className="btn-id-search btn-notifications dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
      //         <i className="fas fa-search"></i>
      //       </a>
      //     </li>
      //   </ul>
      //   <div className="dropdown-menu dropdown-content" role="menu">
      //     <div className="dropdown-content-heading">
      //       Buscar
      //     </div>
      //   </div>
      // </div>
      // <button onClick={this.handleClick}>
      //   <i className="fas fa-search"></i>
      // </button>
    )

  }
}

export default Search
