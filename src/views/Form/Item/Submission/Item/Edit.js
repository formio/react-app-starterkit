import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { selectRoot, resetSubmissions, saveSubmission, Form } from 'react-formio';
import {push} from 'connected-react-router';
import Loading from '../../../../../containers/Loading'
import { AppConfig } from '../../../../../config';

const Edit = class extends Component {
  render() {
    const {hideComponents, onSubmit, options, form: {form, isActive: isFormActive}, submission: {submission, isActive: isSubActive}} = this.props;

    if (isFormActive || isSubActive) {
      return <Loading />;
    }

    return (
      <div>
        <h3>Edit { form.title } Submission</h3>
        <Form
          form={form}
          submission={submission}
          hideComponents={hideComponents}
          onSubmit={onSubmit}
          options={options}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    form: selectRoot('form', state),
    submission: selectRoot('submission', state),
    options: {}
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (submission) => {
      dispatch(saveSubmission('submission', submission, {project: AppConfig.projectUrl, formId: ownProps.match.params.formId}, (err, submission) => {
        dispatch(resetSubmissions('submission'));
        dispatch(push(`/form/${ownProps.match.params.formId}/submission/${submission._id}`))
      }));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit)
