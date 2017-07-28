import React, { Component } from 'react';


class ModalProfessores extends Component {
  render() {
    return (
      <div>
        <button type="button" className="btn btn-success alinhar-a-direita" data-toggle="modal" data-target="#modalprofessores">Adinionar novo professor</button>

        <div id="modalprofessores" className="modal fade" role="dialog">
          <div className="modal-dialog">

            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Adicionar novo Professor</h4>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-10 col-md-offset-1">
                    <form>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Nome" />
                      </div>
                      <div className="form-group">
                        <textarea className="form-control" rows="5" placeholder="Descrição"></textarea>
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Link para Currículo" />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputFile">Foto</label>
                        <input type="file" id="exampleInputFile" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-success" data-dismiss="modal">Salvar</button>
                <button type="button" className="btn btn-default" data-dismiss="modal">Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalProfessores;