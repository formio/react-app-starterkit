import React from 'react';
import { connect } from 'react-redux';
import Confirm from '../../../containers/Confirm';
import { deleteForm, selectError, Errors } from 'react-formio';
import {push, goBack} from 'connected-react-router';

const Delete = props => (
  <div>
    <Errors errors={props.errors} />
    <Confirm {...props} />
  </div>
)

const mapStateToProps = (state) => {
  return {
    message: `Are you sure you wish to delete the resource "${state.form.form.title}"?`,
    errors: selectError('form', state),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onYes: () => {
      dispatch(deleteForm('form', (err) => {
        if (!err) {
          dispatch(push('/resource'));
        }
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
)(Delete)