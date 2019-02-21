import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <div>
    <h1>List Submission</h1>
    <ul>
      <li><Link to="/form/1/submission/1">Submission 1</Link></li>
      <li><Link to="/form/1/submission/2">Submission 2</Link></li>
    </ul>
  </div>
)
