import React, { Component } from 'react'

class Body extends Component {
  render() {
    return (
      <div>
        <div className="dashboardCompanyContent_data">
          <div className="clearfix">
            <div className="row">
              <div className="col-xs-12 text-center">
                <br />
                <div className="event-not-found">
                  <img src="agenda/img/empty_state_agenda_2018.svg" className="empty_image"/>
                  <br />
                  Nenhum evento cadastrado
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Body
