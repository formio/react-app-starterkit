import { Link, Route, Switch } from 'react-router-dom'
import React, { Component } from 'react'
import View from './View'
import Edit from './Edit'
import Delete from './Delete'
import Submission from './Submission/index'
import { connect } from 'react-redux'

const Item = class extends Component{
  componentDidMount() {
    this.props.getForm(this.props.match.params.formId);
  }

  render() {
    const {match: {params: {formId}}} = this.props;
    return (
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link" to="/form">
              <i className="fa fa-chevron-left"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`/form/${formId}`}>
              <i className="fa fa-pencil"></i> Enter Data
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`/form/${formId}/submission`}>
              <i className="fa fa-list-alt"></i> View Data
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`/form/${formId}/edit`}>
              <i className="fa fa-edit"></i> Edit Form
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`/form/${formId}/delete`}>
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
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {
    getForm: () => {}
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);
