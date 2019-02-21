import { Link, Route, Switch } from 'react-router-dom'
import React from 'react'
import View from './View'
import Edit from './Edit'
import Delete from './Delete'

export default () => (
  <div>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link className="nav-link" to="/form/1/submission">
          <i className="fa fa-chevron-left"></i>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/form/1/submission/1">
          <i className="fa fa-eye"></i> View
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/form/1/submission/1/edit">
          <i className="fa fa-edit"></i> Edit
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/form/1/submission/1/delete">
          <i className="fa fa-trash"></i> Delete
        </Link>
      </li>
    </ul>
    <Switch>
      <Route exact path="/form/:formId/submission/:submissionId" component={View} />
      <Route path="/form/:formId/submission/:submissionId/edit" component={Edit} />
      <Route path="/form/:formId/submission/:submissionId/delete" component={Delete} />
   </Switch>
  </div>
)
