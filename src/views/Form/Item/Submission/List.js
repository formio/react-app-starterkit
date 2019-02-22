import React, {Component} from "react";
import { Link } from 'react-router-dom'

export default class extends Component {
  render() {
    const {match: {params: {formId}}} = this.props
    console.log(this.props);
    return (
      <div>
        <h1>List Submission</h1>
        <ul>
          <li><Link to={`/form/${formId}/submission/1`}>Submission 1</Link></li>
          <li><Link to={`/form/${formId}/submission/2`}>Submission 2</Link></li>
        </ul>
      </div>
    )
  }
}
