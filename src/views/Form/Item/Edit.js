import { connect } from 'react-redux';
import { saveForm, selectForm, FormEdit } from 'react-formio';
import {AppConfig} from '../../../config';

const mapStateToProps = (state) => {
  return {
    form: selectForm('form', state),
    saveText: 'Save Form',
    title: 'Edit Form',
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveForm: (form) => dispatch(saveForm('form', form, { project: AppConfig.projectUrl }))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormEdit)
