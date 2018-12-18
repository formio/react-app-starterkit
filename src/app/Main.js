import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Header from './containers/Header';
import Footer from './containers/Footer';

export default class Main extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const {children} = this.props;
    return (
      <div className="main-container">
        <Header />
        <main className="main">
          <div className="container">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
