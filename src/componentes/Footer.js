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
                <span className="img-logo">Spotify</span>
              </div>
              <div className="col-md-2">
                <h4>Company</h4>
                <ul className="nav">
                  <li><a href="#">Sobre</a></li>
                  <li><a href="#">Empregos</a></li>
                  <li><a href="#">Imprensa</a></li>
                  <li><a href="#">Novidades</a></li>
                </ul>
              </div>

              <div className="col-md-2">
                <h4>Novidades</h4>
                <ul className="nav">
                  <li><a href="#">Sobre</a></li>
                  <li><a href="#">Empregos</a></li>
                  <li><a href="#">Imprensa</a></li>
                  <li><a href="#">Novidades</a></li>
                </ul>
              </div>

              <div className="col-md-2">
                <h4>Links Úteis</h4>
                <ul className="nav">
                  <li><a href="#">Sobre</a></li>
                  <li><a href="#">Empregos</a></li>
                  <li><a href="#">Imprensa</a></li>
                  <li><a href="#">Novidades</a></li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className="nav">
                  <li className="item-rede-social"><a href="#"><img src={facebook} /></a></li>
                  <li className="item-rede-social"><a href="#"><img src={twitter} /></a></li>
                  <li className="item-rede-social"><a href="#"><img src={instagram} /></a></li>
                </ul>
              </div>
            </div> 
          </div>      
        </footer>
    );
  }
}

export default Footer;