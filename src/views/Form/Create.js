import { connect } from 'react-redux';
import { saveForm } from 'react-formio';
import FormEdit from '../../containers/FormEdit';
import {AppConfig} from '../../config';

const mapStateToProps = (state) => {
  return {
    form: {},
    saveText: 'Create Form',
    title: 'New Form',
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
