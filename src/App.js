import React from 'react'
import { Route } from 'react-router-dom'
import Header from './containers/Header'
import Footer from './containers/Footer'
import Home from './views/Home'
import Form from './views/Form'
import User from './views/User'

const App = () => (
  <div>
    <Header />

    <div className="container" id="main">
      <Route exact path="/" component={Home} />
      <Route path="/form" component={Form} />
      <Route path="/user" component={User} />
    </div>

    <Footer />
  </div>
)

export default App
