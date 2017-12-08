import React from 'react';
import PropTypes from 'prop-types';
import { showroomScopeDecorator } from '@opuscapita/react-showroom-client';
import { I18nManager } from '@opuscapita/i18n';

@showroomScopeDecorator
class FormattedMessageScope extends React.Component {
  static contextTypes = {
    i18n: PropTypes.object
  }

  static childContextTypes = {
    i18n: PropTypes.object
  }

  getChildContext() {
    const i18n = new I18nManager({ locale: 'en' });
    i18n.register('TextComponent',
      {
        'en': {
          logo: 'Here we go',
        },
      }
    );
    return { i18n };
  }

  render() {
    return (<div>{this._renderChildren()}</div>)
  }
}

export default FormattedMessageScope;
