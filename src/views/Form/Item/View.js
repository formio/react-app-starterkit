import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { selectRoot, Form } from 'react-formio';
import { Form as formio } from 'formiojs';

const View = class extends Component {
  render() {
    const {submission, hideComponents, onSubmit, form: {form, isActive}} = this.props;

    if (isActive) {
      return <div>Loading...</div>;
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
          formioform={formio}
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

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (submission) => {
      console.log('submit', submission)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View)
