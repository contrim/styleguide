import React, { Component } from 'react'

class Models extends Component {
  render() {
    return (
      <div>
        <div className="col-lg-8 col-lg-offset-2">
        <h1>_models</h1>
        <br />
        <code>
          <p>Empresa</p>
          <p>&nbsp;Usuários</p>
          <p>&nbsp;Categorias</p>
          <p>&nbsp;&nbsp;Modelos</p>
          <p>&nbsp;&nbsp;Pastas</p>
          <p>&nbsp;&nbsp;&nbsp;Eventos</p>
          <p>&nbsp;&nbsp;Registro de Variáveis</p>
        </code>
        <br />
        <h4>empresas / Companies</h4>
        <code>
          <p>users: [</p>
          <p>&nbsp;_id</p>
          <p>&nbsp;role</p>
          <p>&nbsp;permission: read; write</p>
          <p>]</p>
        </code>
        <br />
        <h4>usuários / Users</h4>
        <code>
          <p>profile:name</p>
          <p>emails:[address]</p>
          <p>currentContext: id: '#companyId'</p>
        </code>
        <br />
        <h4>categoria / Categories</h4>
        <code>
          <p>modelIds: []</p>
          <p>defaultModels: []</p>
          <p>varRegisterIds: []</p>
          <p>milestones: types: [</p>
          <p>&nbsp;_id</p>
          <p>&nbsp;name</p>
          <p>&nbsp;subtypes:[id,name]</p>
          <p>]</p>
          <p>indexId</p>
        </code>
        <br />
        <h4>modelo / Models</h4>
        <code>
          <p>companyId</p>
          <p>structue: [</p>
          <p>&nbsp;varRegisterId</p>
          <p>&nbsp;label</p>
          <p>&nbsp;uniqueId</p>
          <p>&nbsp;dependsOn:#parentUniqueId: 'expectedValue'</p>
          <p>]</p>
          <p>template [</p>
          <p>&nbsp;content</p>
          <p>&nbsp;conditions:</p>
          <p>&nbsp;&nbsp;entity?: #entityElementUniqueId</p>
          <p>&nbsp;&nbsp;rules:[type, key, value]</p>
        </code>
        <br />
        <h4>pasta / Instance</h4>
        <code>
          <p>categoryId</p>
          <p>companyId</p>
          <p>activities</p>
          <p>attachments</p>
          <p>comments</p>
          <p>status</p>
          <p>variables: value, indexedValue</p>
        </code>
        <br />
        <h4>eventos / Milestones</h4>
        <code>
          <p>type</p>
          <p>instanceId</p>
          <p>status</p>
          <p>users:[]</p>
          <p>variables:[]</p>
        </code>
        <br />
        <h4>registro de variáveis / VarRegister</h4>
        <code>
          <p>type</p>
          <p>label</p>
          <p>companyId</p>
        </code>
        </div>
      </div>

    )
  }
}

export default Models
