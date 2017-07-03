import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-fixed-top navbar-inverse navbar-transparente">
          <div className="container">
            

            <div className="navbar-header">

              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#barra-navegacao">
              <span className="sr-only">alternar navegação</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              </button>

              <a href="index.html" className="navbar-brand">
                <span className="img-logo">CCUENF</span>
              </a>
            </div>


            <div className="collapse navbar-collapse" id="barra-navegacao">
              <ul className="nav navbar-nav navbar-right">
              <li><a onClick={() => browserHistory.push('')}>Apresentação</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pessoas<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a onClick={() => browserHistory.push('pessoas')}>Professores</a></li>
                  <li><a onClick={() => browserHistory.push('pessoas')}>Administração</a></li>
                  <li><a onClick={() => browserHistory.push('pessoas')}>Discentes</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Projetos<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Monografias</a></li>
                  <li><a href="#">Artigos</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Intranet<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Avaliação dos Alunos</a></li>
                  <li><a href="#">Avaliação dos professores</a></li>
                  <li><a href="#">Pré-Matrícula</a></li>
                </ul>
              </li>
              </ul> 
            </div>
          </div>
        </nav>
    );
  }
}

export default Navbar;