import PropTypes from 'prop-types';
import React from 'react';
import { I18nManager } from '@opuscapita/i18n';
import defaultProps from './defaultProps';

class I18nContext extends React.Component {
  constructor(props) {
    super(props);
    this.initManager(props);
  }

  getChildContext() {
    return { i18n: this.i18n };
  }

  componentDidUpdate(prevProps) {
    this.initManager(this.props);
  }

  initManager(props) {
    this.i18n = new I18nManager(props);
  }

  render() {
    return this.props.children;
  }
}

I18nContext.contextTypes = {
  i18n: PropTypes.object
};
I18nContext.childContextTypes = {
  i18n: PropTypes.object
};
I18nContext.propTypes = {
  locale: PropTypes.string,
  localeFormattingInfo: PropTypes.object,
  fallbackLocale: PropTypes.string,
  overriddenTranslations: PropTypes.object,
};
I18nContext.defaultProps = {
  locale: defaultProps.locale,
  localeFormattingInfo: defaultProps.localeFormattingInfo,
  fallbackLocale: defaultProps.fallbackLocale
};

export default I18nContext;
