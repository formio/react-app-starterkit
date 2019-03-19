import { Link, Route, Switch } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import View from './View'
import Edit from './Edit'
import Delete from './Delete'
import { getSubmission } from "react-formio";
import { calculateFormPerms } from '../../../../../helpers/permissions';

const Item = class extends Component {
  constructor() {
    super();

    this.state = {
      submissionId: '',
      perms: {},
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { match, form, user } = nextProps;

    if (match.params.submissionId !== prevState.submissionId) {
      nextProps.getSubmission(match.params.submissionId);
    }

    if (!_.isEmpty(form) || !_.isEmpty(user)) {
      return {
        submissionId: match.params.submissionId,
        perms: calculateFormPerms(form.submissionAccess, form.owner, user),
      }
    }

    return {
      submissionId: nextProps.match.params.submissionId
    };
  }
  render() {
    const { match: { params: { formId, submissionId } } } = this.props;
    const { perms } = this.state;

    return (
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link" to={`/form/${formId}/submission`}>
              <i className="fa fa-chevron-left"></i>
            </Link>
          </li>
          {perms.data ? (<li className="nav-item">
            <Link className="nav-link" to={`/form/${formId}/submission/${submissionId}`}>
              <i className="fa fa-eye"></i> View
            </Link>
          </li>) : null}
          {perms.edit ? (<li className="nav-item">
            <Link className="nav-link" to={`/form/${formId}/submission/${submissionId}/edit`}>
              <i className="fa fa-edit"></i> Edit
            </Link>
          </li>) : null}
          {perms.delete ? (<li className="nav-item">
            <Link className="nav-link" to={`/form/${formId}/submission/${submissionId}/delete`}>
              <i className="fa fa-trash"></i> Delete
            </Link>
          </li>) : null}
        </ul>
        <Switch>
          <Route exact path="/form/:formId/submission/:submissionId" component={View} />
          <Route path="/form/:formId/submission/:submissionId/edit" component={Edit} />
          <Route path="/form/:formId/submission/:submissionId/delete" component={Delete} />
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getSubmission: (id) => dispatch(getSubmission('submission', id, ownProps.match.params.formId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item)
