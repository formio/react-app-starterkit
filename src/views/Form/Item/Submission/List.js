import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import SubmissionGrid from '../../../../containers/SubmissionGrid';
import { getSubmissions, selectRoot } from 'react-formio';
import { AppConfig } from '../../../../config';

const List = class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      query: {},
      page: 0
    }
  }

  componentWillMount() {
    this.props.getSubmissions(this.state.page, this.state.query);
  }

  toggleSort = (field) => {
    if (!this.query.sort) {
      return this.query.sort = field;
    }
    const currentSort = this.query.sort[0] === '-' ? this.query.sort.slice(1, this.query.sort.length) : this.query.sort;
    if (currentSort !== field) {
      this.query.sort = field;
    }
    else if (this.query.sort[0] !== '-') {
      this.query.sort = '-' + field;
    }
    else {
      delete this.query.sort;
    }
  };

  render() {
    const {match: {params: {formId}}} = this.props
    const {form, submissions, limit, page, sortOrder, isLoading, onSort, onPage, onRowClick} = this.props

    if (isLoading) {
      return (
        <div className='form-index'>
          Loading...
        </div>
      );
    }
    else {
      return (
        <div className='form-index'>
          <SubmissionGrid
            submissions={submissions}
            form={form}
            limit={limit}
            page={page}
            sortOrder={sortOrder}
            onSort={onSort}
            onPage={onPage}
            onRowClick={onRowClick}
          />
          <Link className='btn btn-primary' to={`/form/${formId}`}>
            <i className='glyphicon glyphicon-plus' aria-hidden='true'></i>
            New {form.title}
          </Link>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const form = selectRoot('form', state);
  const submissions = selectRoot('submissions', state);

  return {
    // basePath: resource.getBasePath(ownProps.params),
    form: form.form,
    submissions: submissions.submissions,
    page: submissions.page,
    limit: submissions.limit,
    // sortOrder: this.query.sort,
    isLoading: form.isFetching || submissions.isFetching
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getSubmissions: (page, query) => dispatch(getSubmissions('submissions', page, query, { formId: ownProps.match.params.formId, project: AppConfig.projectUrl })),
    onSort: (col) => {
      // this.toggleSort(col);
      // dispatch(this.formio.resources[config.name].actions.submission.index(this.page, this.query));
    },
    onPage: (page) => {
      // this.page = page - 1;
      // dispatch(this.formio.resources[config.name].actions.submission.index(this.page, this.query));
    },
    onRowClick: (submission) => {
      // this.router.push(resource.getBasePath(ownProps.params) + config.name + '/' + submission._id);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
