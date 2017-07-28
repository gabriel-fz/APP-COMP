import React, { Component } from 'react';
import ModalProjetos from './ModalProjetos';
import 'bootstrap';


class EditarProjetosArtigos extends Component {
  render() {
    return (
      <div>

        <section id="fundo-branco">
          <div id="noticias" className="container">
          <h2 className="titulo-secao">Artigos</h2>

          <div className="panel panel-default">
            <div className="panel-body">
              <form>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label for="exampleSelect1">Escolher ano</label>
                          <select className="form-control" id="exampleSelect1">
                            <option>2015</option>
                            <option>2016</option>
                            <option>2017</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="exampleSelect1">Ordenar Por</label>
                          <select className="form-control" id="exampleSelect1">
                            <option>Título - Ordem alfabética</option>
                            <option>Autor - Ordem alfabética</option>
                            <option>Mês - Crescente</option>
                            <option>Mês - Decrescente</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <ModalProjetos />
                      </div>
                    </div>
                </form>
            </div>
            <div className="panel-footer">
              <div className="card-block">      
                <div className="card">
                  <div className="card-block">
                    <h4 className="card-title">Aplicação da Inteligência Artificial</h4>
                    <h6 className="card-subtitle mb-2 text-muted">Gabriel Fiorese</h6>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>
                      <button type="button" className="btn btn-primary">Editar</button>
                      <button type="button" className="btn btn-danger">Excluir</button>
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-block">      
                <div className="card">
                  <div className="card-block">
                    <h4 className="card-title">Aplicação da Inteligência Artificial</h4>
                    <h6 className="card-subtitle mb-2 text-muted">Gabriel Fiorese</h6>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>
                      <button type="button" className="btn btn-primary">Editar</button>
                      <button type="button" className="btn btn-danger">Excluir</button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section> 

      </div>
    );
  }
}

export default EditarProjetosArtigos;