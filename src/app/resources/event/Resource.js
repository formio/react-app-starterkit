import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FormioView from 'react-formio/lib/FormioView';
import NavLink from 'react-formio/lib/components/NavLink';

export default config => class Resource extends FormioView {
  component = class extends Component {
    static propTypes = {
      params: PropTypes.object.isRequired,
      children: PropTypes.object.isRequired
    }

    render = () => {
      const {params, children} = this.props;
      return (
        <div>
          <ul className="nav nav-tabs">
            <NavLink exact to={'/' + config.name + '/' + params[config.name + 'Id']} role="presentation">
              View
            </NavLink>
            <NavLink to={'/' + config.name + '/' + params[config.name + 'Id'] + '/activity'} role="presentation">
              Activity
            </NavLink>
            <NavLink to={'/' + config.name + '/' + params[config.name + 'Id'] + '/edit'} role="presentation">
              Edit
            </NavLink>
            <NavLink to={'/' + config.name + '/' + params[config.name + 'Id'] + '/delete'} role="presentation">
              <span className="glyphicon glyphicon-trash" />
            </NavLink>
          </ul>
          {children}
        </div>
      );
    }
  }

  initialize = ({dispatch}) => {
    const resource = this.formio.resources[config.name];
    dispatch(resource.actions.submission.get(this.props.params[config.name + 'Id']));
  }
};
