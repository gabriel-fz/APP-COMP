import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';


class Documentos extends Component {

  render() {
    return (
      <div>
        <div className="espaço"></div>
        <section id="fundo-branco" className="rodape-de-secao">
          <div id="ocurso" className="container">
            <h2 className="titulo-secao">Documentos</h2>
            <hr align="center" width="40%" />
          </div>
        </section>

        <section id="fundo-branco" className="rodape-de-secao">
          <div className="card container">
            <div className="card-block">
              <h3 className="card-title">Regulamento de Trabalho de Conclusão do Curso (TCC)</h3>
              <p className="card-text">O Curso de Ciência da Computação considera pertinente a “Monografia” como produto de TCC, por seu perfil Científico e Tecnológico em  computação. Duas disciplinas consecutivas dos últimos semestres  do curso geram os respectivos relatórios técnicos: Projeto de Monografia e Monografia.</p>
              <button type="button" className="btn btn-primary">Download do arquivo em PDF</button>
              <a tabindex="0" className="btn btn-danger" role="button" data-toggle="popover" data-trigger="focus" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?">Dismissible popover</a>
              <button type="button" className="btn btn-default" data-toggle="tooltip" data-placement="left" title="Tooltip on left">Tooltip on left</button>
            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default Documentos;