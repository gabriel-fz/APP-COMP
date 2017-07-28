import React, { Component } from 'react';


class ModalAdministracao extends Component {
  render() {
    return (
      <div>
        <button type="button" className="btn btn-success alinhar-a-direita" data-toggle="modal" data-target="#modaladministracao">Adinionar novo Funcionário</button>

        <div id="modaladministracao" className="modal fade" role="dialog">
          <div className="modal-dialog">

            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Adicionar novo Funcionário</h4>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-10 col-md-offset-1">
                    <form>
                      <div className="form-group">
                        <label for="exampleSelect1">Escolha o cargo</label>
                        <select className="form-control" id="exampleSelect1">
                          <option>Coordenador</option>
                          <option>Secretário(a)</option>
                          <option>Sup Tec</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Nome" />
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Email" />
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Sala" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-success" data-dismiss="modal">Adicionar</button>
                <button type="button" className="btn btn-default" data-dismiss="modal">Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalAdministracao;