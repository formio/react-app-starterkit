import { Component } from "react";
import React from "react";
import { connect } from 'react-redux'
import { selectRoot } from "../../../modules/selectors";
import { Form } from 'react-formio';

const View = class extends Component {
  render() {
    const {submission, hideComponents, onSubmit, form: {form, isActive}} = this.props;

    if (isActive) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>New { form.title }</h3>
        <Form form={form} submission={submission} hideComponents={hideComponents} onSubmit={onSubmit} />
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
    onSubmit: () => {
      console.log('submit')
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View)
