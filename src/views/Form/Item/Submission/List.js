import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import _ from 'lodash';
import { push } from 'connected-react-router';
import { getSubmissions, selectRoot, selectError, SubmissionGrid, Errors } from 'react-formio';
import Loading from '../../../../containers/Loading';
import { calculateFormPerms } from '../../../../helpers/permissions';

const List = class extends Component {
  state = {
    form: {},
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { form, user } = nextProps
    if (!_.isEqual(form, prevState.form) || !_.isEmpty(user)) {
      return {
        form: { ...form, perms: calculateFormPerms(form.submissionAccess, form.owner, user) },
      }
    }

    return null;
  }

  componentDidMount() {
    this.props.getSubmissions(1);
  }

  render() {
    const { match: { params: { formId } } } = this.props
    const { form, submissions, isLoading, onAction, getSubmissions, errors } = this.props
    const formWithPerms = this.state.form;

    if (isLoading) {
      return (
        <Loading />
      );
    }

    return (
      <div className='form-index'>
        <Errors errors={errors} />
        <SubmissionGrid
          submissions={submissions}
          form={formWithPerms}
          onAction={onAction}
          getSubmissions={getSubmissions}
        />
        <Link className='btn btn-primary' to={`/form/${formId}`}>
          <i className='glyphicon glyphicon-plus fa fa-plus' aria-hidden='true'></i>
          New {form.title}
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const form = selectRoot('form', state);
  const submissions = selectRoot('submissions', state);

  return {
    form: form.form,
    user: state.auth.user,
    submissions: submissions,
    isLoading: form.isActive || submissions.isActive,
    errors: [
      selectError('submissions', state),
      selectError('form', state)
    ]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getSubmissions: (page, query) => dispatch(getSubmissions('submissions', page, query, ownProps.match.params.formId)),
    onAction: (submission, action) => {
      switch (action) {
        case 'view':
        case 'row':
          dispatch(push(`/form/${ownProps.match.params.formId}/submission/${submission._id}`));
          break;
        case 'edit':
          dispatch(push(`/form/${ownProps.match.params.formId}/submission/${submission._id}/edit`));
          break;
        case 'delete':
          dispatch(push(`/form/${ownProps.match.params.formId}/submission/${submission._id}/delete`));
          break;
        default:
      }
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
