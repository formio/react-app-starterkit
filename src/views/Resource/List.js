import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { Link } from 'react-router-dom'
import { indexForms, selectRoot, selectError, Errors } from 'react-formio';
import Loading from "../../containers/Loading";

import ResourceGrid from '../../containers/Grid/ResourceGrid'

const List = class extends Component {
  componentWillMount() {
    this.props.getResources(
      1,
      {
        type: 'resource',
        sort: 'created',
        tags__in: ['system', 'builder'],
        skip: '0',
        limit: 10,
        select: '_id,title,type,path,modified,name,tags',
      })
  };

  componentDidUpdate(){
    const { auth } = this.props;

    this.operations = [
      {
        action: 'view',
        buttonType: 'primary',
        icon: 'pencil',
        permissionsResolver() {
          return !!auth.is.administrator;
        },
        title: 'Enter Data',
      },
      {
        action: 'submission',
        buttonType: 'warning',
        icon: 'list-alt',
        permissionsResolver() {
          return !!auth.is.administrator;
        },
        title: 'View Data',
      },
      {
        action: 'edit',
        buttonType: 'secondary',
        icon: 'edit',
        permissionsResolver() {
          return !!auth.is.administrator;
        },
        title: 'Edit Form',
      },
      {
        action: 'delete',
        buttonType: 'danger',
        icon: 'trash',
        permissionsResolver() {
          return !!auth.is.administrator;
        },
      },
    ];
  }

  onPageSizeChanged = (value) => {
    const params = {
      type: 'resource',
      skip: '0',
      sort: 'created',
      tags__in: ['system', 'builder'],
      limit: value,
      select: '_id,title,type,path,modified,name,tags',
    };

    this.props.getResources(1, params);
  };

  render() {
    const { resources, onAction, getResources, errors } = this.props;

    if (resources.isActive) {
      return (
        <Loading />
      );
    }

    return (
      <div>
        <h1>Resources</h1>
        <Errors errors={errors} />
        <ResourceGrid
          forms={resources}
          onAction={onAction}
          getForms={getResources}
          operations={this.operations}
          onPageSizeChanged={this.onPageSizeChanged}
        />
        <Link className="btn btn-primary create-button" to="/resource/create">
          <i className="fa fa-plus"/> Create Resource
        </Link>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    resources: selectRoot('resources', state),
    errors: selectError('resources', state),
    auth: selectRoot('auth', state),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getResources: (page, query={ type: 'resource', tags__in: ['system', 'builder'], skip: '0', sort: 'created', select: '_id,title,type,path,modified,name,tags', }) => {
      dispatch(indexForms('resources', page, query))
    },
    onAction: (form, action) => {
      switch(action) {
        case 'view':
          dispatch(push(`/resource/${form._id}`));
          break;
        case 'submission':
          dispatch(push(`/resource/${form._id}/submission`));
          break;
        case 'edit':
          dispatch(push(`/resource/${form._id}/edit`));
          break;
        case 'delete':
          dispatch(push(`/resource/${form._id}/delete`));
          break;
        default:
      }
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);