import { Link, Route, Switch } from 'react-router-dom'
import React from 'react'
import View from './View'
import Edit from './Edit'
import Delete from './Delete'
import Submission from './Submission/index'

export default () => (
  <div>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link className="nav-link" to="/form">
          <i className="fa fa-chevron-left"></i>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/form/1">
          <i className="fa fa-pencil"></i> Enter Data
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/form/1/submission">
          <i className="fa fa-list-alt"></i> View Data
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/form/1/edit">
          <i className="fa fa-edit"></i> Edit Form
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/form/1/delete">
          <i className="fa fa-trash"></i> Delete Form
        </Link>
      </li>
    </ul>
    <Switch>
      <Route exact path="/form/:formId" component={View} />
      <Route path="/form/:formId/edit" component={Edit} />
      <Route path="/form/:formId/delete" component={Delete} />
      <Route path="/form/:formId/submission" component={Submission} />
    </Switch>
  </div>
)
