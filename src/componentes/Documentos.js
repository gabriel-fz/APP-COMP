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
          <div className="container">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-md-10">
                    <h4 className="card-title cor-azul">Regulamento de Trabalho de Conclusão do Curso (TCC)</h4>
                  </div>
                  <div className="col-md-2">
                    <button type="button" className="btn btn-primary">Download em PDF</button>
                  </div>
                </div>
              </div>
              <div className="card-block">      
              <div className="row">
                <div className="col-md-7">
                  <h4><b>Descrição</b></h4>
                  <p className="alinhar-texto2">O Curso de Ciência da Computação considera pertinente a “Monografia” como produto de TCC, por seu perfil Científico e Tecnológico em  computação. Duas disciplinas consecutivas dos últimos semestres  do curso geram os respectivos relatórios técnicos: Projeto de Monografia e Monografia.</p>
                </div>
                <div className="col-md-4">
                  <h4><b>Anexos</b></h4>
                  <p>Modelo em latex  para monografia (para aluno)</p>
                  <p>Formulário de pedido da defesa (para orientador)</p>
                  <p>Formulário de qualificação da defesa (para a banca)</p>
                </div>
              </div>
              </div>
            </div>
          </div>

          <br />

          <div className="container">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-md-10">
                    <h4 className="card-title cor-azul">Regulamento de Estágio Supervisionado</h4>
                  </div>
                  <div className="col-md-2">
                    <button type="button" className="btn btn-primary">Download em PDF</button>
                  </div>
                </div>
              </div>
              <div className="card-block">      
              <div className="row">
                <div className="col-md-7">
                  <h4><b>Descrição</b></h4>
                  <p className="alinhar-texto2">Estabelece as diretrizes  do estagio obrigatório em computação, respeitando o perfil do curso segundo o projeto pedagógico vigente, para guiar o aluno nessa fase de formação, e o professor supervisor  guie ao aluno.</p>
                </div>
                <div className="col-md-4">
                  <h4><b>Anexos</b></h4>
                  <p>Modelo de relatório de estagio (para aluno)</p>
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

export default Documentos;