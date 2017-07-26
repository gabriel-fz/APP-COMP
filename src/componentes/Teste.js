import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import OwlCarousel from 'react-owl-carousel2';
import scti from '../IMGs/SCTI.jpg';
import noticia1 from '../IMGs/noticia1.jpg';
import noticia2 from '../IMGs/noticia2.jpg';
import noticia3 from '../IMGs/noticia3.jpg';
import noticia4 from '../IMGs/noticia4.jpg';

const options = {
    items: 3,
    nav: false,
    rewind: true,
    autoplay: true,
    margin: 50,
    loop: true,
    responsive:{
        0:{items:2},
        600:{items:3},
        1000:{items:3}
    }
};

const events = {
};

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

          <div className="container">
            <OwlCarousel ref="car" options={options} events={events} >
                <div>
                  <div className="row">
                    <img src={scti} className="img-responsive" />
                  </div>
                  <div className="row">
                    <h4 className="alinhamento-titulo">As inscrições para o SCTI 2017 estão abertas!</h4>
                  </div>
                </div>

                <div className="card">
                  <img className="card-img-top" src={scti} alt="Card image cap" />
                  <div className="card-block">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
                
                <div>
                  <div className="row">
                    <img src={noticia2} className="img-responsive" />
                  </div>
                  <div className="row">
                    <h4 className="alinhamento-titulo">NOTÍCIA 2</h4>
                  </div>
                </div>
                <div>
                  <div className="row">
                    <img src={noticia3} className="img-responsive" />
                  </div>
                  <div className="row">
                    <h4 className="alinhamento-titulo">NOTÍCIA 3</h4>
                  </div>
                </div>
                <div>
                  <div className="row">
                    <img src={noticia4} className="img-responsive" />
                  </div>
                  <div className="row">
                    <h4 className="alinhamento-titulo">NOTÍCIA 4</h4>
                  </div>
                </div>
            </OwlCarousel>
          </div>

          <div className="container">
            <div className="card">
              <img className="card-img-top" src={scti} alt="Card image cap" />
              <div className="card-block">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={scti} alt="Card image cap" />
              <div className="card-block">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={scti} alt="Card image cap" />
              <div className="card-block">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>

        </section>
      </div>
    );
  }
}

export default Teste;