import { connect } from 'react-redux';
import Confirm from '../../../containers/Confirm';
import { deleteForm } from 'react-formio';
// import { resetForms } from '../../../modules/forms';
import {push, goBack} from 'connected-react-router';
import {AppConfig} from '../../../config';

const mapStateToProps = (state) => {
  return {
    message: 'Are you sure you wish to delete this form?'
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onYes: () => {
      dispatch(deleteForm('form', ownProps.match.params.formId, { project: AppConfig.projectUrl }));
      // dispatch(resetForms('form'));
      dispatch(push('/form'));
    },
    onNo: () => {
      dispatch(goBack());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Confirm)
