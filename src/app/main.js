import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './containers/Home';

export class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <Header />
        <main className="main">
          <Router history={browserHistory}>
            <Route path="/" component={Home} />
          </Router>
        </main>
        <Footer />
      </div>
    );
  }
}
