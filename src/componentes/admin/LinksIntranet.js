import React, { Component } from 'react';
import 'bootstrap';
import ModalCurso from './ModalOCurso';
import ModalLinks from './ModalLinks';
import $ from 'jquery';


class LinksIntranet extends Component {
  render() {
    return (
      <div>

        <section id="fundo-branco">
          <div id="noticias" className="container">
          <h2 className="titulo-secao">Editar Links</h2>

          <div className="panel panel-default">
            <div className="panel-body">
              <div className="row">
                <div className="col-md-6">
                  <h4><b>Links - Úteis</b></h4>
                </div>
                <div className="col-md-6">
                  <ModalLinks />
                </div>
              </div>
            </div>
            <div className="panel-footer">
              <table className="table">
                <thead>
                  <tr>
                    <th>Título</th>
                    <th>URL</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Avaliação dos Alunos</th>
                    <th>https://annabelltamariz.typeform.com/to/BndEz5</th>
                    <td>
                      <button type="button" className="btn btn-danger alinhar-a-direita">Excluir</button>
                    </td>
                  </tr>
                  <tr>
                    <th>Avaliação dos professores</th>
                    <th>https://annabelltamariz.typeform.com/to/NVj4yr</th>
                    <td>
                      <button type="button" className="btn btn-danger alinhar-a-direita">Excluir</button>
                    </td>
                  </tr>
                  <tr>
                    <th>Pré-Matrícula</th>
                    <th>www.lcmat.uenf.br/matricula</th>
                    <td>
                      <button type="button" className="btn btn-danger alinhar-a-direita">Excluir</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          </div>
        </section>
      </div>
    );
  }
}

export default LinksIntranet;