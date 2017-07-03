import React, { Component } from 'react';

class Pessoas extends Component {
  render() {
    return (
      <div>
        <div className="espaço"></div>


         <section id="fundo-branco" className="rodape-de-secao">
          <div id="ocurso" className="container">
            <h2 className="titulo-secao">Professores</h2>
            <hr align="center" width="40%" />
            <br />
          </div>
        </section>

        <section id="fundo-branco" className="rodape-de-secao">
          <div id="ocurso" className="container">
            <h2 className="titulo-secao">Administração</h2>
            <hr align="center" width="40%" />
            <br />
            <div className="margem-estilizada">
              <div className="row">
                <div className="col-md-4">
                  <h3 className="cor-azul">Coordenador</h3>
                  <p>Professor Dr. Luis Rivera</p>
                  <p>Email: rivera@uenf.br</p>
                  <p>Sala: 119 - P5</p>
                </div>
                <div className="col-md-4">
                  <h3 className="cor-azul">Técnico Administrador</h3>
                  <p>Vania Navarro</p>
                  <p>Email: vaniabib@uenf.br </p>
                  <p>Sala: 113 - P5 (secretaria - LCMAT) </p>
                </div>
                <div className="col-md-4">
                  <h3 className="cor-azul">Suporte Técnico</h3>
                  <p>Msc. Edilson Maciel</p>
                  <p>Email: edilson@uenf.br</p>
                  <p>Sala: 120-P5</p>
                  <br />
                  <p>Tec. Francisco Alves</p>
                  <p>Email: alves@uenf.br</p>
                  <p>Sala: 120-P5</p>
                  <br />
                  <p>Tec. André (Assessor-Chair)</p>
                  <p>Suporte de Redes de Computadores</p>
                  <p>Email: andre@uenf.br</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="fundo-branco" className="rodape-de-secao">
          <div id="ocurso" className="container">
            <h2 className="titulo-secao">Discentes</h2>
            <hr align="center" width="40%" />
            <br />
            <p className="alinhar-texto">Os alunos de graduação em Bacharelado de Ciência da Computação ingressam anualmente uma media de 25. Pelo perfil do curso, eles devem ter um domínio na base matemática e desejos de mudar o mundo para bem com a ciência e tecnologia computacional. Os alunos permanecem na vida acadêmica uma media de 5 anos para cumprir a carga horária do projeto pedagógico do curso vigente. Ao longo desse período, os alunos podem participar nos projetos de pesquisa dos professores como bolsistas de iniciação científica, bolsas de extensão e bolsas de apoio administrativo. Eventualmente, como bolsistas de monitoria.</p>
          </div>
        </section>

      </div>
    );
  }
}

export default Pessoas;