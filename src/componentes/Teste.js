import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Teste extends Component {

  render() {
    return (
      <div>
        <div className="espaço"></div>
        <section id="fundo-branco" className="rodape-de-secao">
          <div id="ocurso" className="container">
            <h2 className="titulo-secao">O Curso</h2>
            <hr align="center" width="40%" />
            <br />
            <p className="alinhar-texto">O Bacharelado de Ciência da Computação na UENF inicia suas atividades acadêmicas no ano 2007 no Centro de Ciências e Tecnologias (CCT) e anexo ao Laboratório de Ciências Matemáticas (LCMAT). O curso foi projetado, dentro do paradigma de Darcy Ribeiro, baseado nas diretrizes curriculares de computação de MEC e respeitando os critérios internacionais dados por ACM-IEEE- AIS, com um perfil científico-tecnológico, sem descuidar suas aplicações imediatas, para formar cientistas em computação que serão uma alternativa de desenvolvimento científico e tecnológico da região e do país.</p>
            <p className="alinhar-texto">Com esse objetivo, o Bacharelado de Ciência da Computação diferencia-se dos outros cursos de computação em sua grade curricular, qualificado pelo MEC nas últimas avaliações de ENADE com melhor conceito.</p>
            <p className="alinhar-texto">O egresso de este curso, esta preparado para atuar na área acadêmica e pesquisa em computação, seguindo os cursos de pós-graduação. A base curricular lhe permite, também, atuar como impulsor de inovações tecnológicas em software e parte de hardware; fábrica de softwares inteligentes; ferramentas de interação humano e computador em diferentes plataformas e níveis; gestão, manipulação e análise eficiente de toda categoria de dados; engenharia de dados; desenvolvimento de games; gestão e configuração de redes de computadores; atuação em projetos envolvendo novos paradigmas e tecnologias emergentes; atuação como analista e desenvolvedor de todo sistemas de software de aplicações computacionais demandadas pelas empresas.</p>
          </div>
        </section>
        <section id="fundo-branco" className="rodape-de-secao">
          <form>
            <div className="form-group container">
              <label for="exampleTextarea">Texto:</label>
              <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
              <br />
              <button type="button" className="btn btn-primary">Salvar</button>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default Teste;