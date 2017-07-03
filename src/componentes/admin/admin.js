import React, { Component } from 'react';
import NavbarAdmin from './NavbarAdmin';
import Footer from '../Footer';

class Admin extends Component {
  render() {
    return (
      <div>
        <NavbarAdmin />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Admin;