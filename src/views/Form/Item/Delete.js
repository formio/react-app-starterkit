import { connect } from 'react-redux';
import Confirm from '../../../containers/Confirm';
import { deleteForm } from "../../../modules/form";
// import { resetForms } from '../../../modules/forms';
import {push, goBack} from "connected-react-router";

const mapStateToProps = (state) => {
  return {
    message: 'Are you sure you wish to delete this form?'
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onYes: () => {
      dispatch(deleteForm('form', ownProps.match.params.formId));
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
