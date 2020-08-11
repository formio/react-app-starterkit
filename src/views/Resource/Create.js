import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  saveForm,
  getForm,
  selectRoot,
  selectError,
  Errors,
  clearFormError,
  resetForm,
} from 'react-formio';
import { push } from 'connected-react-router';
import Loading from "../../containers/Loading";

import FormEdit from '../../containers/FormEdit';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    const {
      resetForm
    } = this.props;

    resetForm();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params.resourceId !== prevState.resourceId) {
      nextProps.getForm(nextProps.match.params.resourceId);
    } else if (!nextProps.match.params.resourceId) {
      return {};
    }

    return {
      resourceId: nextProps.match.params.resourceId,
    };
  }

  render() {
    let {  form: {form, isActive}, auth } = this.props;
    const submissionAccessRoles = [
      auth.roles.authenticated ? auth.roles.authenticated._id : null,
    ];

    form.submissionAccess = [
      {
        roles: [
          ...submissionAccessRoles
        ],
        type: 'create_all'
      },
      {
        roles: [
          ...submissionAccessRoles
        ],
        type: 'read_all'
      },
      {
        roles: [
          ...submissionAccessRoles
        ],
        type: 'update_all'
      },
      {
        roles: [
          ...submissionAccessRoles
        ],
        type: 'delete_all'
      }
    ];

    if (isActive) {
      return <Loading />;
    }

    return (
      <div>
        <h2>Create Resource</h2>
        <hr/>
        <Errors errors={this.props.errors}/>
        <FormEdit { ...this.props } form={form} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    form: selectRoot('form', state),
    auth: selectRoot('auth', state),
    saveText: 'Create Resource',
    errors: selectError('form', state),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveForm: (resourceId) => {
      const newResource = {
        ...resourceId,
        submissionAccess: resourceId.submissionAccess,
        type: 'resource',
        tags: ['builder'],
      };
      dispatch(saveForm('form', newResource, (err, resourceId) => {
        if (!err) {
          dispatch(push(`/resource/${resourceId._id}`))
        }
      }))
    },
    getForm: (id) => dispatch(getForm('form', id)),
    clearFormError: () => dispatch(clearFormError('form')),
    resetForm: () => dispatch(resetForm('form')),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Create)