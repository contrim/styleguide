import React, { Component } from "react"
class SideTab extends Component {
  render() {
    return (
      <div>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4 tab-col">
              <div id="test" data-toggle="collapse" data-target="#customTeste" aria-expanded="true">
                <div className="row text-center tab-rows">
                  <div className="col-md-6">Ativo</div>
                  <div className="col-md-2"></div>
                  <div className="col-md-4">4 total</div>
                </div>
              </div>
            </div>
        </div>
        </div>
        <div id="customTeste" className="collapse" aria-expanded="true">
          OI AQUI
        </div>
      </div>
    )
  }
}

export default SideTab
