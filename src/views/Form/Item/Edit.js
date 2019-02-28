import React, { Component } from 'react'
import { connect } from 'react-redux';
import { FormBuilder } from 'react-formio';
import { selectRoot } from '../../../modules/selectors';
import { saveForm } from '../../../modules/form/actions';
import _ from 'lodash';

const Edit = class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        title: '',
        name: '',
        path: '',
        display: 'form',
        components: []
      }
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.form._id !== nextProps.form.form._id) {
      return {
        form: _.clone(nextProps.form.form)
      }
    }
    return null
  }

  setForm(form) {
    this.setState({
      form
    });
  }

  saveForm() {
    this.props.saveForm(this.state.form);
  }

  handleChange(prop, event) {
    const value = event.target.value;
    this.setState(prev => {
      prev.form[prop] = value;
      return prev;
    });
  }

  render() {
    const { form } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-lg-2 col-md-4 col-sm-4">
            <div id="form-group-title" className="form-group">
              <label htmlFor="title" className="control-label field-required">Title</label>
              <input
                type="text"
                className="form-control" id="title"
                placeholder="Enter the form title"
                value={this.state.form.title}
                onChange={event => this.handleChange('title', event)}
              />
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4">
            <div id="form-group-name" className="form-group">
              <label htmlFor="name" className="control-label field-required">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter the form machine name"
                value={this.state.form.name}
                onChange={event => this.handleChange('name', event)}
              />
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-3">
            <div id="form-group-display" className="form-group">
              <label htmlFor="name" className="control-label">Display as</label>
              <div className="input-group">
                <select
                  className="form-control"
                  name="form-display"
                  id="form-display"
                  value={this.state.form.display}
                  onChange={event => this.handleChange('display', event)}
                >
                  <option label="Form" value="string:form">Form</option>
                  <option label="Wizard" value="string:wizard">Wizard</option>
                  <option label="PDF" value="string:pdf">PDF</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-4">
            <div id="form-group-path" className="form-group">
              <label htmlFor="path" className="control-label field-required">Path</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="path"
                  placeholder="example"
                  style={{'textTransform': 'lowercase', width:'120px'}}
                  value={this.state.form.path}
                  onChange={event => this.handleChange('path', event)}
                />
              </div>
            </div>
          </div>
          <div id="save-buttons" className="col-lg-3 col-md-5 col-sm-5 save-buttons pull-right">
            <div className="form-group pull-right">
              <span className="btn btn-primary" onClick={() => this.saveForm()}>
                Save Form
              </span>
            </div>
          </div>
        </div>
        <FormBuilder key={form._id} form={form} onChange={(form) => this.setForm(form)}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    form: selectRoot('form', state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveForm: (form) => dispatch(saveForm('form', form))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit)
