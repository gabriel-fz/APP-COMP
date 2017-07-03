import React, { Component } from 'react';


class ModalNoticias extends Component {
  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal2">Adicionar</button>

        <div id="myModal2" className="modal fade" role="dialog">
          <div className="modal-dialog">

            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Adicionar Notícia</h4>
              </div>
              <div className="modal-body">

                <form>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Título</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputFile">File input</label>
                    <input type="file" id="exampleInputFile" />
                  </div>
                </form>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Salvar</button>
                <button type="button" className="btn btn-default" data-dismiss="modal">Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalNoticias;