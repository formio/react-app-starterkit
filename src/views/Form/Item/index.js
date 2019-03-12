import { Link, Route, Switch } from 'react-router-dom'
import React, { Component } from 'react'
import View from './View'
import Edit from './Edit'
import Delete from './Delete'
import Translate from './Translate'
import Submission from './Submission/index'
import { connect } from 'react-redux'
import { getForm } from 'react-formio'
import { Languages } from '../../../config';

const Item = class extends Component{
  constructor() {
    super();

    this.state = {
      formId: ''
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params.formId !== prevState.formId) {
      nextProps.getForm(nextProps.match.params.formId);
    }

    return {
      formId: nextProps.match.params.formId
    };
  }

  access(tab) {
    switch(tab) {
      case 'translateForm':
        return true;
        break;
    }

    return true;
  }

  render() {
    const {match: {params: {formId}}} = this.props;
    return (
      <div>
        <ul className="nav nav-tabs">
          {
            (this.access('listForms')) ?
              <li className="nav-item">
                <Link className="nav-link" to="/form">
                  <i className="fa fa-chevron-left"></i>
                </Link>
              </li>
              : null
          }
          {
            (this.access('createSubmission')) ?
              <li className="nav-item">
                <Link className="nav-link" to={`/form/${formId}`}>
                  <i className="fa fa-pencil"></i> Enter Data
                </Link>
              </li>
              : null
          }
          {
            (this.access('readSubmissions')) ?
              <li className="nav-item">
                <Link className="nav-link" to={`/form/${formId}/submission`}>
                  <i className="fa fa-list-alt"></i> View Data
                </Link>
              </li>
              : null
          }
          {
            (this.access('editForm')) ?
              <li className="nav-item">
                <Link className="nav-link" to={`/form/${formId}/edit`}>
                  <i className="fa fa-edit"></i> Edit Form
                </Link>
              </li>
              : null
          }
          {
            (this.access('translateForm') && Languages.length > 1) ?
              <li className="nav-item">
                <Link className="nav-link" to={`/form/${formId}/translate`}>
                  <i className="fa fa-language"></i> Translate
                </Link>
              </li>
              : null
          }
          {
            (this.access('deleteForm')) ?
              <li className="nav-item">
                <Link className="nav-link" to={`/form/${formId}/delete`}>
                  <i className="fa fa-trash"></i> Delete Form
                </Link>
              </li>
              : null
          }
        </ul>
        <Switch>
          <Route exact path="/form/:formId" component={View} />
          <Route path="/form/:formId/edit" component={Edit} />
          { Languages.length > 1 ? <Route path="/form/:formId/translate" component={Translate} /> : null }
          <Route path="/form/:formId/delete" component={Delete} />
          <Route path="/form/:formId/submission" component={Submission} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = () => {
  return {};
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
