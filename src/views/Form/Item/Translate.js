import React from 'react';
import { connect } from 'react-redux';
import { saveForm, selectForm, FormEdit, Errors, selectError } from 'react-formio';
import utils from 'formiojs/utils';

const Edit = props => {
  const strings = utils.getStrings(props.form);

  return (
    <div>
      <h2>Translate {props.form.title} Form</h2>
      <hr />
      <ul>
        {
          strings.map((item, index) => {
            return <li key={index}>
                {item.string}
            </li>
          })
        }
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    form: selectForm('form', state),
    saveText: 'Save Form',
    errors: selectError('form', state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveForm: (form) => dispatch(saveForm('form', form, (err, form) => {
      if (!err) {
        // TODO: Display a save success message here.
      }
    }))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit)
