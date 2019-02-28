import { connect } from 'react-redux';
import { saveForm } from '../../modules/form/actions';
import FormEdit from '../../containers/FormEdit';

const mapStateToProps = (state) => {
  return {
    form: {},
    saveText: 'Create Form',
    title: 'New Form',
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
