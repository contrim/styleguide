import React, { Component } from 'react'

class TopBlocks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      today: 0,
      tomorrow: 0,
      thisWeek: 0,
      thisMonth: 0
    }
  }

  componentDidMount() {
    this.setState({
      today: this.props.today,
      tomorrow: this.props.tomorrow,
      thisWeek: this.props.thisWeek,
      thisMonth: this.props.thisMonth
    })
  }

  render() {
    return (

      <div className="clearfix">
        <div className="container-squares col-xs-12">
          <div className="row">
            <div className="small-padding col-xs-3">
              <div className="today square-sm square-regular square-active-selected">
                <div className="square-vertical-align">
                  hoje
                </div>
                <div className="square-number">
                  {this.state.today}
                </div>
              </div>
            </div>
            <div className="small-padding col-xs-3">
              <div className="today square-sm square-regular">
                <div className="square-vertical-align">
                  amanhã
                </div>
                <div className="square-number">
                  {this.state.tomorrow}
                </div>
              </div>
            </div>
            <div className="small-padding col-xs-3">
              <div className="today square-sm square-regular">
                <div className="square-vertical-align">
                  esta semana
                </div>
                <div className="square-number">
                  {this.state.thisWeek}
                </div>
              </div>
            </div>
            <div className="small-padding col-xs-3">
              <div className="today square-sm square-regular">
                <div className="square-vertical-align">
                  este mês
                </div>
                <div className="square-number">
                  {this.state.thisMonth}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TopBlocks
