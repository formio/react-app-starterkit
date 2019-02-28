import { connect } from 'react-redux';
import { selectRoot, saveForm } from 'react-formio';
import FormEdit from '../../../containers/FormEdit';
import {AppConfig} from '../../../config';

const mapStateToProps = (state) => {
  return {
    form: selectRoot('form', state),
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
