import React, { Component } from "react"
class StepsButton extends Component {
  render(){
    return(
      <div>
        <button className="btn btn-flux-primary btn-flux-step" type="button">
          <img src="../../../public/img/arrowRight.svg" />
          &nbsp; próximo passo &nbsp;
        </button>
        <br />
        <br />
        <code>
          button.btn.btn-flux.btn-flux-step(type="button") <br />
          &nbsp; i.fas.fa-arrow-right<br />
          &nbsp; próximo
        </code>
        <br />
        <br />
        <button className="btn btn-flux btn-flux-step" type="button">
          <img src="../../../public/img/arrowRight.svg" />
          &nbsp; próximo passo &nbsp;
        </button>
        <br />
        <br />
        <code>
          button.btn.btn-flux.btn-flux-step(type="button") <br />
          &nbsp; i.fas.fa-arrow-right<br />
          &nbsp; próximo
        </code>
        <br />
        <br />
        <button className="btn btn-flux-default" type="button">
          <img src="../../../public/img/back-step.svg" />
          &nbsp; voltar passo &nbsp;
        </button>
        <br />
        <br />
        <code>
          button.btn.btn-flux.btn-flux-step(type="button") <br />
          &nbsp; i.fas.fa-arrow-right<br />
          &nbsp; próximo
        </code>
      </div>


    )
  }
}

export default StepsButton
