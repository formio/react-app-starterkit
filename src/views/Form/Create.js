import { connect } from 'react-redux';
import { saveForm, FormEdit } from 'react-formio';
import {push} from 'connected-react-router';
import {AppConfig} from '../../config';

const mapStateToProps = (state) => {
  return {
    form: {display: 'form'},
    saveText: 'Create Form',
    title: 'New Form',
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveForm: (form) => {
      dispatch(saveForm('form', form, { project: AppConfig.projectUrl }))
      dispatch(push('/form/${form._id'))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormEdit)
