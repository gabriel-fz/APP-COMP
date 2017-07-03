import React, { Component } from 'react';
import Navbar from './componentes/Navbar';
import TelaInicial from './componentes/TelaInicial';
import Footer from './componentes/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar />

        <div>
          {this.props.children}
        </div>

        <Footer />

      </div>
    );
  }
}

export default App;
