import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class extends Component {
  render(props) {
    return (
      <div>
        <h1>List Forms</h1>
        <ul>
          <li><Link to="/form/1">1</Link></li>
          <li><Link to="/form/2">2</Link></li>
        </ul>
        <Link className="btn btn-primary" to="/form/create"><i className="fa fa-plus"></i> Create Form</Link>
      </div>
    )
  }
}
