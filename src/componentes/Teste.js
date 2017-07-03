import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import imagemcapa from '../IMGs/cccomputacaodois.svg';
import imagemteste from '../IMGs/img1.jpg';
import $ from 'jquery';


class Teste extends Component {

  render() {
    return (
      <div>
        <div className="espaço"></div>
        <section id="fundo-branco">
          <div id="noticias" className="container">
          <h2 className="titulo-secao">Notícias</h2>
          <hr align="center" width="50%" />
          </div>
        </section> 
      </div>
    );
  }
}

export default Teste;