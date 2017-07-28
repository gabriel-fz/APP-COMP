import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import imagemcapa from '../../IMGs/cccomputacaodois.svg';


class Login extends Component {

  render() {
    return (
      <div className="container">
        <div className="col-md-4 col-md-offset-4">
          <section>
            <div className="panel panel-default top caja">
              <div className="panel-body">
              <div className="row">
                <img src={imagemcapa} className="img-logo3" />
              </div>
                <form>
                  <div className="input-group input-group-lg">
                  <span className="input-group-addon" id="sizing-addon1"><i className="fa fa-user" aria-hidden="true"></i></span>
                  <input type="email" name="email" id="email" className="form-control" placeholder="Email" aria-describedby="sizing-addon1" required />
                </div>
                <br />
                <div className="input-group input-group-lg">
                  <span className="input-group-addon" id="sizing-addon1"><i className="fa fa-key" aria-hidden="true"></i></span>
                  <input type="password" name="password" id="password" className="form-control" placeholder="Senha" aria-describedby="sizing-addon1" required />
                </div>
                <br />
                 <button type="submit" className="btn btn-primary btn-block">Login</button>

                </form>
              </div>
            </div>
          </section>
        </div>
        
      </div>
    );
  }
}

export default Login;