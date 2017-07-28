import React, { Component } from 'react';
import ModalDiscentes from './ModalDiscentes';
import ModalProfessores from './ModalProfessores';
import ModalAdministracao from './ModalAdministracao';


class EditarPessoas extends Component {
  render() {
    return (
      <div>

        <section id="fundo-branco">
          <div id="noticias" className="container">
          <h2 className="titulo-secao">Pessoas</h2>

          <div className="panel panel-default">
            <div className="panel-body">
              <div className="row">
                <div className="col-md-6">
                  <h4><b>Professores</b></h4>
                </div>
                <div className="col-md-6">
                  <ModalProfessores />
                </div>
              </div>
            </div>
            <div className="panel-footer">
              <div className="card-block">      
                <div className="card">
                  <div className="card-block">
                    <h4 className="card-title">Anabel</h4>
                    <p className="card-text">Professora Associada, Doutora em Engenharia Elétrica pela Unicamp-Brasil (2005), com graduação em Ciências da Computação. Atualmente, trabalha na area de pesquisa de Inteligência Artificial</p>
                    <p>
                      <button type="button" className="btn btn-danger">Excluir</button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />

          <div className="panel panel-default">
            <div className="panel-body">
              <div className="row">
                <div className="col-md-6">
                  <h4><b>Administração</b></h4>
                </div>
                <div className="col-md-6">
                  <ModalAdministracao />
                </div>
              </div>
            </div>
            <div className="panel-footer">
              <table className="table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Sala</th>
                    <th>Cargo</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Professor Dr. Luis Rivera</th>
                    <th>Email: rivera@uenf.br</th>
                    <th>Sala: 119 - P5</th>
                    <th>Coordenador</th>
                    <td>
                      <button type="button" className="btn btn-danger alinhar-a-direita">Excluir</button>
                    </td>
                  </tr>
                  <tr>
                    <th>Vania Navarro</th>
                    <th>Email: vaniabib@uenf.br</th>
                    <th>Sala: 113 - P5 (secretaria - LCMAT)</th>
                    <th>Secretária</th>
                    <td>
                      <button type="button" className="btn btn-danger alinhar-a-direita">Excluir</button>
                    </td>
                  </tr>
                  <tr>
                    <th>Msc. Edilson Maciel</th>
                    <th>Email: edilson@uenf.br</th>
                    <th>Sala: 120-P5</th>
                    <th>Sup tec</th>
                    <td>
                      <button type="button" className="btn btn-danger alinhar-a-direita">Excluir</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <br />

          <div className="panel panel-default">
            <div className="panel-body">
              <div className="row">
                <div className="col-md-6">
                  <h4><b>Discentes</b></h4>
                </div>
                <div className="col-md-6">
                  <ModalDiscentes />
                </div>
              </div>
            </div>
            <div className="panel-footer">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
              <p>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!</p>
              <p>Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!</p>
              <p>Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil explicabo perferendis quos provident delectus ducimus necessitatibus reiciendis optio tempora unde earum doloremque commodi laudantium ad nulla vel odio?</p>
            </div>
          </div>
          
          </div>
        </section> 

      </div>
    );
  }
}

export default EditarPessoas;