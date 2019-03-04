import { connect } from 'react-redux';
import Confirm from '../../../../../containers/Confirm';
import { deleteSubmission, resetSubmissions } from 'react-formio';
import {push, goBack} from 'connected-react-router';

const mapStateToProps = (state) => {
  return {
    message: `Are you sure you wish to delete the submission "${state.submission.submission._id}"?`
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onYes: () => {
      dispatch(deleteSubmission('submission', ownProps.match.params.submissionId, ownProps.match.params.formId, () => {
        dispatch(resetSubmissions('submissions'));
        dispatch(push(`/form/${ownProps.match.params.formId}/submission`));
      }));
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
