import React, { Component } from 'react';
import 'bootstrap';
import ModalCurso from './ModalOCurso';
import ModalNoticias from './ModalNoticias';
import $ from 'jquery';


class TelaInicialAdmin extends Component {

  constructor(){
    super();
    this.state = {lista : []};
  }

  componentDidMount(){
    $.ajax({
      url:"http://localhost:3000/dados",
      dataType: 'json',
      success:function(resposta){
        this.setState = ({lista:resposta});
      }.bind(this)
    });
  }

enviaForm(evento){
    evento.preventDefault();
    console.log("dados sendo enviados");
  }


  render() {
    return (
      <div>

        <section id="fundo-branco">
          <div id="noticias" className="container">
          <h2 className="titulo-secao">Tela inicial</h2>

          <div className="panel panel-default">
            <div className="panel-body">Notícias</div>
            <div className="panel-footer">
              <table className="table">
                <thead>
                  <tr>
                    <th>Título</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Greve geral na uenf</th>
                    <td>
                      <button type="button" className="btn btn-danger alinhar-a-direita" onSubmit={this.enviaForm} method="post">Excluir</button>
                    </td>
                  </tr>
                  <tr>
                    <th>Greve geral na uenf</th>
                    <td>
                      <button type="button" className="btn btn-danger alinhar-a-direita">Excluir</button>
                    </td>
                  </tr>
                  {
                    this.state.lista.map(function(noticia){
                      return(
                        <tr>
                          <th>{noticia.titulo}</th>
                          <td>
                            <button type="button" className="btn btn-danger alinhar-a-direita">Excluir</button>
                          </td>
                        </tr>
                      )
                    })
                  }




                  <tr>
                    <th>
                      <ModalNoticias />
                    </th>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <br />

          <div className="panel panel-default">
            <div className="panel-body">Sobre o curso</div>
            <div className="panel-footer">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
              <p>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!</p>
              <p>Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!</p>
              <p>Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil explicabo perferendis quos provident delectus ducimus necessitatibus reiciendis optio tempora unde earum doloremque commodi laudantium ad nulla vel odio?</p>

              <ModalCurso />

            </div>
          </div>
          
          </div>
        </section>
      </div>
    );
  }
}

export default TelaInicialAdmin;