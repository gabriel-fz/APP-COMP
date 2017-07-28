import React, { Component } from 'react';


class ModalNoticias extends Component {

  enviaForm(evento){
    evento.preventDefault();
    console.log("dados sendo enviados");
  }


  render() {
    return (
      <div>
        <button type="button" className="btn btn-success alinhar-a-direita" data-toggle="modal" data-target="#myModal2">Adicionar</button>

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
                    <label for="titulo">Título</label>
                    <input type="text" className="form-control" id="titulo" />
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