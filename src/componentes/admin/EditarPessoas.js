import React, { Component } from 'react';
import ModalDiscentes from './ModalDiscentes';


class EditarPessoas extends Component {
  render() {
    return (
      <div>

        <section id="fundo-branco">
          <div id="noticias" className="container">
          <h2 className="titulo-secao">Pessoas</h2>

          <div className="panel panel-default">
            <div className="panel-body">Professores</div>
            <div className="panel-footer">Panel de edição de professores</div>
          </div>

          <br />

          <div className="panel panel-default">
            <div className="panel-body">Administração</div>
            <div className="panel-footer">Panel de edição de Administração</div>
          </div>

          <br />

          <div className="panel panel-default">
            <div className="panel-body">Discentes</div>
            <div className="panel-footer">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
              <p>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!</p>
              <p>Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!</p>
              <p>Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil explicabo perferendis quos provident delectus ducimus necessitatibus reiciendis optio tempora unde earum doloremque commodi laudantium ad nulla vel odio?</p>

              <ModalDiscentes />

            </div>
          </div>
          
          </div>
        </section> 

      </div>
    );
  }
}

export default EditarPessoas;