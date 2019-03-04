import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { selectRoot, resetSubmissions, saveSubmission, Form } from 'react-formio';
import {push} from 'connected-react-router';
import Loading from '../../../../../containers/Loading'

const View = class extends Component {
  render() {
    const {hideComponents, onSubmit, options, form: {form, isActive: isFormActive}, submission: {submission, isActive: isSubActive, url}} = this.props;

    if (isFormActive || isSubActive) {
      return <Loading />;
    }

    return (
      <div>
        <h3>View { form.title } Submission</h3>
        <Form
          form={form}
          submission={submission}
          url={url}
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
    options: {
      readOnly: true
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (submission) => {
      dispatch(saveSubmission('submission', submission, ownProps.match.params.formId, (err, submission) => {
        dispatch(resetSubmissions('submission'));
        dispatch(push(`/form/${ownProps.match.params.formId}/submission/${submission._id}`))
      }));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View)
