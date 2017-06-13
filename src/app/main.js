import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Header from './containers/Header';
import Footer from './containers/Footer';

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <Header />
        <main className="main">
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.func.isRequired
};

export default Main;
