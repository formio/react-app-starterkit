import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { indexForms, selectForms } from 'react-formio';
import {AppConfig} from "../../config";

const List = class extends Component {
  componentWillMount() {
    this.props.getForms(1);
  }

  render() {
    const { forms } = this.props;
    return (
      <div>
        <h1>List Forms</h1>
        <ul>
          {
            forms.map((form, index) => <li key={index}>
              <Link to={`/form/${form._id}`}>{ form.title }</Link>
            </li>)
          }
        </ul>
        <Link className="btn btn-primary" to="/form/create"><i className="fa fa-plus"></i> Create Form</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    forms: selectForms('forms', state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getForms: (query, page) => dispatch(indexForms('forms', query, page, { project: AppConfig.projectUrl })),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
