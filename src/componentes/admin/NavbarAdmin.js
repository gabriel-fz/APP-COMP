import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Link} from "react-router";

class NavbarAdmin extends Component {
  render() {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">

            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand">
                <span className="img-logo2">CCUENF</span>
              </a>
            </div>


            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><a className="estado" onClick={() => browserHistory.push('/admin')}>Apresentação</a></li>
                <li><a className="estado" onClick={() => browserHistory.push('editar-pessoas')}>Pessoas</a></li>
                <li className="dropdown">
                  <a className="estado" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Projetos<span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a className="estado" onClick={() => browserHistory.push('editar-projetos-artigos')}>Artigos</a></li>
                    <li><a className="estado" onClick={() => browserHistory.push('editar-projetos-monografias')}>Monografias</a></li>
                  </ul>
                </li>
                <li><a className="estado" onClick={() => browserHistory.push('editar-links')}>Links Úteis</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a className="estado">Sair</a></li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}

export default NavbarAdmin;