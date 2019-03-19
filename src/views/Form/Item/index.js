import { Link, Route, Switch } from 'react-router-dom'
import React, { Component } from 'react'
import View from './View'
import Edit from './Edit'
import Delete from './Delete'
import Submission from './Submission/index'
import _ from 'lodash';
import { connect } from 'react-redux'
import { getForm } from 'react-formio'
import { calculateFormPerms } from '../../../helpers/permissions'

const Item = class extends Component {
  constructor() {
    super();

    this.state = {
      formId: '',
      perms: {},
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { form, user, match } = nextProps;

    if (match.params.formId !== prevState.formId) {
      nextProps.getForm(match.params.formId);
    }

    if (form._id !== prevState.formId
      || !_.isEmpty(user)) {
      return {
        perms: calculateFormPerms(form.access, form.owner, nextProps.user, form.submissionAccess),
      }
    }

    return {
      formId: nextProps.match.params.formId
    };
  }

  render() {
    const { match: { params: { formId } } } = this.props;
    const { perms } = this.state;

    return (
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link" to="/form">
              <i className="fa fa-chevron-left"></i>
            </Link>
          </li>
          {perms.view ? (<li className="nav-item">
            <Link className="nav-link" to={`/form/${formId}`}>
              <i className="fa fa-pencil"></i> Enter Data
            </Link>
          </li>) : null}
          {perms.data ? (<li className="nav-item">
            <Link className="nav-link" to={`/form/${formId}/submission`}>
              <i className="fa fa-list-alt"></i> View Data
            </Link>
          </li>) : null}
          {perms.edit ? (
            <li className="nav-item">
              <Link className="nav-link" to={`/form/${formId}/edit`}>
                <i className="fa fa-edit"></i> Edit Form
            </Link>
            </li>
          ) : null}
          {perms.delete ? (<li className="nav-item">
            <Link className="nav-link" to={`/form/${formId}/delete`}>
              <i className="fa fa-trash"></i> Delete Form
            </Link>
          </li>) : null}
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

const mapStateToProps = (state) => {
  return {
    form: state.form.form,
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getForm: (id) => dispatch(getForm('form', id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);
