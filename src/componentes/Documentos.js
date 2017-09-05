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
                    <h4 className="card-title cor-azul">Projetos pedagógicos</h4>
                  </div>
                  <div className="col-md-2">
                    <button type="button" className="btn btn-primary alinhar-a-direita">Baixar todos anexos</button>
                  </div>
                </div>
              </div>
              <div className="card-block">      
              <div className="row">
                <div className="col-md-6">
                  <h4><b>Descrição</b></h4>
                  <p className="alinhar-texto2"> <u>O projeto de Criação do Curso (2006):</u> O curso de Ciência da Computação foi criado no ano 2006, com um projeto inicial elaborado por uma comissão de professores de vários laboratórios delegada pelo concelho do centro de  ciências e tecnologias (CCT) em 2005. No primeiro semestre de 2007 teve a primeira turma do curso.</p>
                  <p className="alinhar-texto2"> <u>Implementação do curso (2007):</u> Durante os primeiros semestres do primeira turma, o plano pedagógico foi aperfeiçoado o projeto inicial, gerando o primeiro projeto pedagógico PPC-2012</p>
                  <p className="alinhar-texto2"> <u>Atualizações:</u> Os seguintes são as atualizações e melhoras, respeitando o perfil do curso, de acordo ao momento na evolução científica e tecnológica de Ciência da Computação no mundo.</p>
                </div>
                <div className="col-md-1 hidden-sm hidden-xs">
                  <div className="Divider2"></div>
                </div>
                <div className="col-md-5">
                  <h4><b>Anexos</b></h4>
                  <p>Modelo de relatório de estagio (para aluno)</p>
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
                    <h4 className="card-title cor-azul">Grade Curricular</h4>
                  </div>
                  <div className="col-md-2">
                    <button type="button" className="btn btn-primary alinhar-a-direita">Baixar todos anexos</button>
                  </div>
                </div>
              </div>
              <div className="card-block">      
              <div className="row">
                <div className="col-md-6">
                  <h4><b>Descrição</b></h4>
                  <p className="alinhar-texto2"> Essa é a grade curricular</p>
                </div>
                <div className="col-md-1 hidden-sm hidden-xs">
                  <div className="Divider1"></div>
                </div>
                <div className="col-md-5">
                  <h4><b>Anexos</b></h4>
                  <p>Modelo de relatório de estagio (para aluno)</p>
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
                    <h4 className="card-title cor-azul">Matriz Curricular</h4>
                  </div>
                  <div className="col-md-2">
                    <button type="button" className="btn btn-primary alinhar-a-direita">Baixar todos anexos</button>
                  </div>
                </div>
              </div>
              <div className="card-block">      
              <div className="row">
                <div className="col-md-6">
                  <h4><b>Descrição</b></h4>
                  <p className="alinhar-texto2"> Essa é a matriz curricular</p>
                </div>
                <div className="col-md-1 hidden-sm hidden-xs">
                  <div className="Divider1"></div>
                </div>
                <div className="col-md-5">
                  <h4><b>Anexos</b></h4>
                  <p>Modelo de relatório de estagio (para aluno)</p>
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
                    <h4 className="card-title cor-azul">Regulamento de Trabalho de Conclusão do Curso (TCC)</h4>
                  </div>
                  <div className="col-md-2">
                    <button type="button" className="btn btn-primary alinhar-a-direita">Baixar todos anexos</button>
                  </div>
                </div>
              </div>
              <div className="card-block">      
              <div className="row">
                <div className="col-md-6">
                  <h4><b>Descrição</b></h4>
                  <p className="alinhar-texto2">O Curso de Ciência da Computação considera pertinente a “Monografia” como um produto de TCC, por seu perfil Científico e Tecnológico em  computação. Duas disciplinas consecutivas dos últimos semestres  do curso geram os respectivos relatórios técnicos: Projeto de Monografia e Monografia.</p>
                </div>
                <div className="col-md-1 hidden-sm hidden-xs">
                  <div className="Divider3"></div>
                </div>
                <div className="col-md-5">
                  <h4><b>Anexos</b></h4>
                  <p>Solicitação Defesa de Monografia (orientador) </p>
                  <p>Doação do Software da Monografia (aluno)</p>
                  <p>Conformação de Banca de Defesa da Monografia (coordenador)</p>
                  <p>Formato de Avaliação (orientador para membros da Banca)</p>
                  <p>Formulário de Declaração da Banca</p>
                  <p> Declaração de Participação na Banca (coordenador)</p>
                  <p>Ata da Defesa da Monografia (orientador)</p>
                  <p>Formato de Defesa Ato Publico  (orientador)</p>
                  <p>Modelo de Aviso de Defesa da Monografia (orientador)</p>
                  <p> Modelo em latex  para monografia (aluno)</p>
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
                    <button type="button" className="btn btn-primary alinhar-a-direita">Baixar todos anexos</button>
                  </div>
                </div>
              </div>
              <div className="card-block">      
              <div className="row">
                <div className="col-md-6">
                  <h4><b>Descrição</b></h4>
                  <p className="alinhar-texto2"> estabelece as diretrizes  do estagio obrigatório em computação, respeitando o perfil do curso segundo o projeto pedagógico vigente, para guiar o aluno nessa fase de formação, e o professor supervisor.</p>
                </div>
                <div className="col-md-1 hidden-sm hidden-xs">
                  <div className="Divider1"></div>
                </div>
                <div className="col-md-5">
                  <h4><b>Anexos</b></h4>
                  <p>Formato de Plano de Atividades de Estágio (aluno para empresa)</p>
                  <p>Modelo de Declaração Final de Estágio (supervisor de estágio)</p>
                  <p>Modelo de Relatório Final de Estágio (aluno)</p>
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