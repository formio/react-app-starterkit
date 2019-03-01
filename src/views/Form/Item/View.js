import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { selectRoot, resetSubmissions, saveSubmission, Form } from 'react-formio';
import {push} from 'connected-react-router';
import { AppConfig } from '../../../config';
import Loading from '../../../containers/Loading';

const View = class extends Component {
  render() {
    const {submission, hideComponents, onSubmit, form: {form, isActive}} = this.props;

    if (isActive) {
      return <Loading />;
    }

    return (
      <div>
        <h3>New { form.title }</h3>
        <Form
          form={form}
          submission={submission}
          hideComponents={hideComponents}
          onSubmit={onSubmit}
          options={{template: 'bootstrap3', iconset: 'fa'}}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    form: selectRoot('form', state)
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
)(View)
