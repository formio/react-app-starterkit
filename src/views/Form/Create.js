import { connect } from 'react-redux';
import { saveForm, FormEdit } from 'react-formio';
import {push} from 'connected-react-router';

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
      dispatch(saveForm('form', form))
      dispatch(push('/form/${form._id'))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormEdit)
