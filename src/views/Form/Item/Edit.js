import React from 'react'
import { connect } from 'react-redux';
import { selectRoot } from '../../../modules/selectors';
import { saveForm } from '../../../modules/form/actions';
import FormEdit from '../../../containers/FormEdit';

const mapStateToProps = (state) => {
  return {
    form: selectRoot('form', state),
    saveText: 'Save Form',
    title: 'Edit Form',
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveForm: (form) => dispatch(saveForm('form', form))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormEdit)
