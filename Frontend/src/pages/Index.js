import React, { Component } from 'react';
import key from 'weak-key';
import api from "../services/api";
import Editar from './../img/edit.png';
import Table from 'react-bootstrap/Table';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '', inputText: '', mode:'', data: [], comentario: '', index: '', rowsBase: [], items: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  //Métodos.
  handleChange(e) {
    this.setState({ [e.target.id]: e.target.id });
    console.log(e.event.name)
  }
  
  handleSave() {
    this.setState({text: this.state.inputText, mode: 'view'});
  }

  handleEdit(key, index) {
    this.setState({mode: 'edit'}, function () {
      console.log(this.state.mode, key)        
      
    });
    
  }

  async componentDidMount() {
      const response = await api.get("/clientes");

      this.setState({ data: response.data});
  }; 

  //Códigos de exibição.
  render(){
    return (
      <div> 
      <header>
      <div className="navbar navbar-dark bg-dark box-shadow">
        <div className="container d-flex justify-content-between">
          <a href="/#" className="navbar-brand d-flex align-items-center">
          <img src="https://www.riosoft.com.br/wp-content/uploads/2016/04/header-riosoft-site.png" alt="Riosoft Sistemas"/>
            <strong></strong>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>

      </header>

    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">Welcome to VersionApp</h1>
        <p className="lead text-muted">Aqui você vai conseguir visualizar todas a base de dados disponíveis em nossos servidores locais e também comentários atribuídos a mesmas.</p>
      </div>
    </section>

  <Table responsive>
    <thead>
      <tr>
        <th>Base</th>
        <th>Versão</th>
        <th>Data de Criação</th>
        <th>Status</th>
        <th>Comentário</th>
        <th>Build</th>
      </tr>
    </thead>    
    <tbody>
      {/* renderizando as bases */}
      {this.state.data.map ((row, index) => {
        return (
          <tr id={key(row)} key={key(row)}>
          <td>{row.Base}</td>
          <td>{row.Versão}</td>
          <td>{row.Data_Criação}</td>
          <td>{row.Status}</td>    
          <td><img src={Editar} style={{cursor: 'pointer'}}alt="Editar" onClick={() => this.handleEdit(key(row), index)} /> {row.Comentario}</td>
          <td>{row.Build}</td>
        </tr>
        )
      })}
    </tbody>
  </Table>  
</div>
);
}
};