import React, { Component } from 'react';
import facebook from '../IMGs/facebook.png';
import twitter from '../IMGs/twitter.png';
import instagram from '../IMGs/instagram.png';

class Footer extends Component {
  render() {
    return (
      <footer id="rodape">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <span className="img-logo">CCUENF</span>
              </div>
              <div className="col-md-5">
                <h4>Mais informações</h4>
                <ul className="nav">
                  <li>Av. Alberto Lamego, 2000 - Parque Califórnia</li>
                  <li>Prédio P5, Sala 119</li>
                  <li>Campos dos Goytacazes - RJ</li>
                  <li>CEP: 28013-602</li>
                </ul>
              </div>
            </div> 
          </div>      
        </footer>
    );
  }
}

export default Footer;