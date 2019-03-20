import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { Link } from 'react-router-dom'
import _ from 'lodash';
import { indexForms, selectRoot, selectError, Errors, FormGrid } from 'react-formio';
import Loading from "../../containers/Loading";
import { getPermissionsFormGrid } from '../../helpers/permissions';

const List = class extends Component {
  state = {
    forms: {}
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!_.isEqual(nextProps.forms, prevState.forms)
      || !_.isEmpty(nextProps.user)) {
      return {
        forms: getPermissionsFormGrid(nextProps.forms, nextProps.user)
      }
    }

    return null;
  }

  componentDidMount() {
    this.props.getForms(1);
  }

  render() {
    const { forms, onAction, getForms, errors } = this.props;
    const formsWithPerms = this.state.forms;

    if (forms.isActive) {
      return (
        <Loading />
      );
    }

    return (
      <div>
        <h1>Forms</h1>
        <Errors errors={errors} />
        <FormGrid
          forms={formsWithPerms}
          onAction={onAction}
          getForms={getForms}
        />
        <Link className="btn btn-primary" to="/form/create"><i className="fa fa-plus"></i> Create Form</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    forms: selectRoot('forms', state),
    errors: selectError('forms', state),
    user: state.auth.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getForms: (page, query) => {
      dispatch(indexForms('forms', page, query))
    },
    onAction: (form, action) => {
      switch (action) {
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
        default:
      }
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
