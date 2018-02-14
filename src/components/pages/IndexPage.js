import React, { Component } from 'react'
import moment from 'moment'
class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date : ""
    }
  }

  componentDidMount() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    console.log(this.state.date)
    return (
      <div className="row">
        <div className="col-lg-12">
            <h1>linte_style_guide</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt orci eget nulla bibendum volutpat. Suspendisse eu lorem ipsum. Praesent fringilla consequat elementum. Quisque semper dolor et nulla rutrum maximus. Donec id mauris a libero maximus vehicula. Morbi iaculis gravida ex. Donec viverra ligula erat, eget aliquam leo ullamcorper et. Duis dapibus varius orci. Mauris dolor libero, iaculis ut nibh in, tempor pretium velit.
            Integer finibus sit amet elit ut rutrum. Maecenas cursus nibh ac dolor blandit eleifend. Nullam posuere et erat ut mattis. Maecenas quis mi et enim accumsan placerat. Aenean vitae molestie enim. Morbi lobortis, odio id lacinia scelerisque, purus arcu ullamcorper elit, vitae tincidunt sem ligula nec eros. Nullam maximus nunc leo, id condimentum nisi imperdiet tincidunt. Fusce quam erat, rutrum a cursus vitae, vestibulum a eros. Proin viverra quam eu erat egestas, sed tristique urna venenatis.</p>
            <div className="jumbotron jumbotron-fluid">
              <div className="container">
                <h4 className="display-4">latest news_</h4>
                <table className="table">
                  <thead>
                    <tr>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">user interface</th>
                      <td>09.Fev 2018</td>
                      <td>Melhorias de UX na agenda. Novas telas e funcionalidades</td>
                      <td>4.7.5</td>
                    </tr>
                    <tr>
                      <th scope="row">fix bugs / Eventos</th>
                      <td>23.Jan 2018</td>
                      <td>Correção do bug de criação de tipo de status e outros.</td>
                      <td>4.7.4</td>
                    </tr>
                    <tr>
                      <th scope="row">fix bugs / Financeiro</th>
                      <td>23.Jan 2018</td>
                      <td>Correção do bug de pagamentos e outros.</td>
                      <td>4.7.4</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <h4>status_</h4>
            <div className="alert alert-success" role="alert">
            linte_app {(moment().format('MMMM Do YYYY, h:mm:ss a'))}
            </div>
            <div className="alert alert-danger" role="alert">
            linte_pipeline {(moment().format('MMMM Do YYYY, h:mm:ss a'))}
            </div>
            <div className="alert alert-warning" role="alert">
            linte_ftp {(moment().format('MMMM Do YYYY, h:mm:ss a'))}
            </div>
            <div className="alert alert-success" role="alert">
            linte_lambda {(moment().format('MMMM Do YYYY, h:mm:ss a'))}
            </div>
        </div>
      </div>
    )
  }
}

export default IndexPage
