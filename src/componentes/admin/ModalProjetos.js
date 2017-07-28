import React, { Component } from 'react';


class ModalProjetos extends Component {
  render() {
    return (
      <div>
        <button type="button" className="btn btn-success" data-toggle="modal" data-target="#myModal2">Adinionar novo</button>

        <div id="myModal2" className="modal fade" role="dialog">
          <div className="modal-dialog">

            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Adicionar novo projeto</h4>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-10 col-md-offset-1">
                    <form>
                      <div className="form-group">
                        <label for="exampleSelect1">Escolha o tipo</label>
                        <select className="form-control" id="exampleSelect1">
                          <option>Artigo</option>
                          <option>Monografia</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Título" />
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Autores" />
                      </div>
                      <div className="form-group">
                        <textarea className="form-control" rows="5" placeholder="Descrição"></textarea>
                      </div>
                      <div className="form-group">
                        <label for="exampleInputFile">Arquivo PDF</label>
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

export default ModalProjetos;