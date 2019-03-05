import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { Link } from 'react-router-dom'
import { indexForms, selectRoot, FormGrid } from 'react-formio';

const List = class extends Component {
  componentWillMount() {
    this.props.getForms(1);
  }

  render() {
    const { forms, onAction } = this.props;
    return (
      <div>
        <h1>Forms</h1>
        <FormGrid forms={forms} onAction={onAction}/>
        <Link className="btn btn-primary" to="/form/create"><i className="fa fa-plus"></i> Create Form</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    forms: selectRoot('forms', state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getForms: (page, query) => dispatch(indexForms('forms', page, query)),
    onAction: (form, action) => {
      switch(action) {
        case 'view':
          dispatch(push(`/form/${form._id}`));
          break;
        case 'submission':
          dispatch(push(`/form/${form._id}/submission`));
          break;
        case 'edit':
          dispatch(push(`/form/${form._id}/edit`));
          break;
        case 'delete':
          dispatch(push(`/form/${form._id}/delete`));
          break;
      }
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
