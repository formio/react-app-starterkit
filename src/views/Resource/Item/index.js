import { Link, Route, Switch } from 'react-router-dom'
import React, { Component } from 'react'
import View from './View'
import Edit from './Edit'
import Delete from './Delete'
import Submission from './Submission/index'
import { connect } from 'react-redux'
import { getForm, selectRoot } from 'react-formio'

const Item = class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resourceId: ''
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params.resourceId !== prevState.resourceId) {
      nextProps.getForm(nextProps.match.params.resourceId);
    }

    return {
      resourceId: nextProps.match.params.resourceId
    };
  }

  render() {
    const {auth, match: {params: {resourceId}}} = this.props;

    return (
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link" to="/resource">
              <i className="fa fa-chevron-left"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`/resource/${resourceId}`}>
              <i className="fa fa-pencil"></i> Enter Data
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`/resource/${resourceId}/submission`}>
              <i className="fa fa-list-alt"></i> View Data
            </Link>
          </li>
          { (auth.is.hasOwnProperty('administrator') && auth.is.administrator) ? (
          <li className="nav-item">
            <Link className="nav-link" to={`/resource/${resourceId}/edit`}>
              <i className="fa fa-edit"></i> Edit Resource
            </Link>
          </li>
          ) : null }
          { (auth.is.hasOwnProperty('administrator') && auth.is.administrator) ? (
          <li className="nav-item">
            <Link className="nav-link" to={`/resource/${resourceId}/delete`}>
              <i className="fa fa-trash"></i> Delete Resource
            </Link>
          </li>
          ) : null }
        </ul>
        <Switch>
          <Route exact path="/resource/:resourceId" component={View} />
          <Route path="/resource/:resourceId/edit" component={Edit} />
          <Route path="/resource/:resourceId/delete" component={Delete} />
          <Route path="/resource/:resourceId/submission" component={Submission} />
        </Switch>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    auth: selectRoot('auth', state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getForm: (id) => dispatch(getForm('form', id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);