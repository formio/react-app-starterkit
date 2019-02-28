import React, {Component} from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import SubmissionGrid from '../../../../containers/SubmissionGrid';
import { selectRoot } from "../../../../modules/selectors";
import { index } from "../../../../modules/submissions";

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
    const {basePath, form, submissions, limit, page, sortOrder, isLoading, onSort, onPage, onRowClick} = this.props

    if (isLoading) {
      return (
        <div className="form-index">
          Loading...
        </div>
      );
    }
    else {
      return (
        <div className="form-index">
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
          <Link className="btn btn-primary" to={`/form/${formId}`}>
            <i className="glyphicon glyphicon-plus" aria-hidden="true"></i>
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
    basePath: 'test',
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
    getSubmissions: (page, query) => dispatch(index('submissions', page, query, ownProps.match.params.formId)),
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
