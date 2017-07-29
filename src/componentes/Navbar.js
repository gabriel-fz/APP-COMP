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

              <a className="navbar-brand">
                <span className="img-logo">CCUENF</span>
              </a>
            </div>


            <div className="collapse navbar-collapse" id="barra-navegacao">
              <ul className="nav navbar-nav navbar-right">
              <li><a className="estado" onClick={() => browserHistory.push('')}>Apresentação</a></li>
              <li className="dropdown">
                <a className="estado" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pessoas<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a className="estado" onClick={() => browserHistory.push('pessoas')} href="#professores">Professores</a></li>
                  <li><a className="estado" onClick={() => browserHistory.push('pessoas')} href="#administracao">Administração</a></li>
                  <li><a className="estado" onClick={() => browserHistory.push('pessoas')} href="#discentes">Discentes</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a className="estado" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Documentos<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a className="estado" onClick={() => browserHistory.push('documentos')}>PDI</a></li>
                  <li><a className="estado" onClick={() => browserHistory.push('documentos')}>Projetos Pedagógicos</a></li>
                  <li><a className="estado" onClick={() => browserHistory.push('documentos')}>Grade Curricular Vigente</a></li>
                  <li><a className="estado" onClick={() => browserHistory.push('documentos')}>Matriz Curricular Vigente</a></li>
                  <li><a className="estado" onClick={() => browserHistory.push('documentos')}>Regulamentos</a></li>
                  <li><a className="estado" onClick={() => browserHistory.push('documentos')}>Formulários</a></li>
                  <li><a className="estado" onClick={() => browserHistory.push('documentos')}>Diretrizes Curriculares</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a className="estado" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Projetos<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a className="estado" onClick={() => browserHistory.push('monografias')}>Monografias</a></li>
                  <li><a className="estado" onClick={() => browserHistory.push('artigos')}>Artigos</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a className="estado" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Intranet<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="https://annabelltamariz.typeform.com/to/BndEz5" target="_blank">Avaliação dos Alunos</a></li>
                  <li><a href="https://annabelltamariz.typeform.com/to/NVj4yr" target="_blank">Avaliação dos professores</a></li>
                  <li><a href="www.lcmat.uenf.br/matricula" target="_blank">Pré-Matrícula</a></li>
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