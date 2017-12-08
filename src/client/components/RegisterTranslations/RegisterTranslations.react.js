import PropTypes from 'prop-types';
import React from 'react';

class RegisterTranslations extends React.Component {
  static propTypes = {
    component: PropTypes.string,
    localeBundles: PropTypes.object
  };

  static contextTypes = {
    i18n: PropTypes.object.isRequired,
  };

  static defaultProps = {
    component: 'test',
    localeBundles: {},
  };

  render() {
    this.context.i18n.register(this.props.component, this.props.localeBundles)
    return this.props.children;
  }
}

export default RegisterTranslations;
