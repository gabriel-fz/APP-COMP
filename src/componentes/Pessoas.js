import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import OwlCarousel from 'react-owl-carousel2';
import scti from '../IMGs/SCTI.jpg';
import anabel from '../IMGs/anabel.png';
import ausberto from '../IMGs/ausberto.png';
import tang from '../IMGs/tang.png';
import rivera from '../IMGs/rivera.png';

import teste1 from '../IMGs/teste1.jpg';
import teste2 from '../IMGs/teste2.jpg';

const options = {
    nav: false,
    rewind: true,
    margin: 20,
    loop: true,
    responsive:{
        0:{items:1, dots: true, autoplay: true},
        600:{items:2, dots: true, autoplay: true},
        1000:{items:4, 
              dots: false, 
              autoplay: false,
              mousedrag: false,
              touchdrag: false,
              pulldrag: false,
              freedrag: false}
    }
};

class Pessoas extends Component {
  render() {
    return (
      <div>
        <div className="espaço"></div>


         <section id="fundo-branco" className="rodape-de-secao">
          <div id="professores" className="container">
            <h2 className="titulo-secao">Professores</h2>
            <hr align="center" width="40%" />
            <br />
              <OwlCarousel ref="car" options={options}>
                  <div className="card">
                    <img className="card-img-top" src={anabel} alt="Card image cap" />
                    <div className="card-block">
                      <h4 className="card-title">Annabell del Real Tamariz</h4>
                      <p className="card-text">Professora Associada, Doutora em Engenharia Elétrica pela Unicamp-Brasil (2005), com graduação em Ciências da Computação. Atualmente, trabalha na area de pesquisa de Inteligência Artificial</p>
                      <a href="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4736911U0" target="_blank" className="btn btn-primary">Currículo Lates</a>
                    </div>
                  </div>
                  <div className="card">
                    <img className="card-img-top" src={ausberto} alt="Card image cap" />
                    <div className="card-block">
                      <h4 className="card-title">Ausberto Castro</h4>
                      <p className="card-text">Professor Associado, Doutor em Ciência da Computação pela UFRGS - Brasil (1996), com graduação em Ciências Matemática. Atualmente trabalha na área de pesquisa de Engharia de Software</p>
                      <a href="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4784254A9" target="_blank" className="btn btn-primary">Currículo Lates</a>
                    </div>
                  </div>
                  <div className="card">
                    <img className="card-img-top" src={tang} alt="Card image cap" />
                    <div className="card-block">
                      <h4 className="card-title">Fermín Tang</h4>
                      <p className="card-text">Professor Associado, Doutor em Engenharia de Produção pela UFRJ - Brasil (2004), com graduação em Pesquisa Operacional. Atualmente trabalha na área de pesquisa de Otimização e Raciocínio Automático.</p>
                      <a href="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4792358T6" target="_blank" className="btn btn-primary">Currículo Lates</a>
                    </div>
                  </div>
                  <div className="card">
                    <img className="card-img-top" src={rivera} alt="Card image cap" />
                    <div className="card-block">
                      <h4 className="card-title">Luis Rivera</h4>
                      <p className="card-text">Professor Associado, Doutor em Ciência da Computação pela PUC-Rio - Brasil (2000), com graduação em Ciência da Computação. Atualmente trabalha na área de pesquisa de Computação Visual e Interação Humano-Computador.</p>
                      <a href="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4763452U5" target="_blank" className="btn btn-primary">Currículo Lates</a>
                    </div>
                  </div>
              </OwlCarousel>
          </div>
        </section>

        <section id="fundo-branco">
          <div id="administracao" className="container">
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
          <div id="discentes" className="container">
            <h2 className="titulo-secao">Discentes</h2>
            <hr align="center" width="40%" />
            <br />
          
            <div className="row">
                <div className="col-md-5 col-md-offset-1">
                  <img src={teste2} className="img-responsive" alt="Responsive image" />
                </div>

                <div className="col-md-5">
                  <p>Os alunos de graduação em Bacharelado de Ciência da Computação ingressam anualmente uma media de 25. Pelo perfil do curso, eles devem ter um domínio na base matemática e desejos de mudar o mundo para bem com a ciência e tecnologia computacional. Os alunos permanecem na vida acadêmica uma media de 5 anos para cumprir a carga horária do projeto pedagógico do curso vigente. Ao longo desse período, os alunos podem participar nos projetos de pesquisa dos professores como bolsistas de iniciação científica, bolsas de extensão e bolsas de apoio administrativo. Eventualmente, como bolsistas de monitoria.</p>
                </div>
            </div>

          </div>
        </section>

      </div>
    );
  }
}

export default Pessoas;