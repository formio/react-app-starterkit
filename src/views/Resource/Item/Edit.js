import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import {
  saveForm,
  selectForm,
  Errors,
  selectError,
  clearFormError
} from 'react-formio';
import {applyFormChanges} from "formiojs/utils/formUtils";
import {history} from "../../../store";
import FormEdit from '../../../containers/FormEdit';
import ConfirmationModal from "../../../containers/ConfirmationModal";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changes: [],
      confirmedChanges: [],
      isConfirmModalOpen: false,
      closeConfirm: false,
      isFormChanged: false,
      targetLocation: ''
    };
  }

  closeConfirmModal = () => {
    this.setState(() => {
      return {
        isConfirmModalOpen: false
      }
    })
  };

  componentDidMount() {
    const {
      clearFormError
    } = this.props;

    this.unblock = history.block(targetLocation => {
      const { isFormChanged } = this.state;

      if (isFormChanged) {
        this.setState({isConfirmModalOpen: true, targetLocation: targetLocation.pathname});
        return false;
      }

      return true;
    });

    clearFormError();
  }

  onCancelChanges = () => {
    this.setState({
      isConfirmModalOpen: false,
      closeConfirm: true
    }, () => {
      this.unblock();
      this.props.goToLocation(this.state.targetLocation)
    });
  };

  onSaveChanges = () => {
    this.setState({
      isConfirmModalOpen: false,
      closeConfirm: true
    }, () => {
      const { form, saveForm, goToLocation } = this.props;
      const { confirmedChanges } = this.state;

      if (form._id && form.type ) {
        const result = applyFormChanges(form, confirmedChanges);
        saveForm(result.form, false);
      }
      this.unblock();
      goToLocation(this.state.targetLocation)
    });
  };

  onFormChange = (change) => {
    const changes = [
      ...this.state.confirmedChanges,
      change
    ];

    this.setState({
      isFormChanged: true,
      confirmedChanges: changes
    })
  };

  onFormSave = (form) => {
    if (this.unblock) {
      this.unblock();
    }

    return this.props.saveForm(form);
  };

  componentWillUnmount() {
    this.unblock();
  }

  render() {
    const {
      form,
      errors
    } = this.props;
    const {
      changes,
      isConfirmModalOpen
    } = this.state;

    return (
      <div>
        <ConfirmationModal
            isOpen={isConfirmModalOpen}
            onCancel={this.onCancelChanges}
            onSave={this.onSaveChanges}
            closeModal={this.closeConfirmModal}
            changes={changes}
        />
        <h2>Edit {form.title} Resource</h2>
        <hr />
        <Errors errors={errors} />
        <FormEdit
            {...this.props}
            saveForm={this.onFormSave}
            onFormChange={this.onFormChange}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    form: selectForm('form', state),
    saveText: 'Save Resource',
    errors: selectError('form', state),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveForm: (resource, shouldRedirect = true) => dispatch(saveForm('form', resource, (err, resource) => {
      if (!err && shouldRedirect) {
        dispatch(push(`/resource/${resource._id}`));
      }
    })),
    clearFormError: () => dispatch(clearFormError('form')),
    goToLocation: (location) => dispatch(push(location)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit)