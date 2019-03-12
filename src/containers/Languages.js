import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class extends Component {
  static propTypes = {
    languages: PropTypes.array,
    containerClass: PropTypes.string,
    linkClass: PropTypes.string,
    onLanguage: PropTypes.func,
  }

  static defaultProps = {
    languages: [],
    onLanguage: () => {},
  }

  hasLanguages() {
    // If only one language is specified, don't have buttons to switch.
    return this.props.languages.length > 1;
  }

  render() {
    if (!this.hasLanguages()) {
      return null;
    }

    const {containerClass, linkClass, languages, onLanguage} = this.props;

    return (
      languages.map((language, index) => (
        <li key={index} className={containerClass}>
          <span className={linkClass} onClick={() => onLanguage(language.key)}>{language.title}</span>
        </li>
      ))
    );
  }
}
