import React, { Component } from 'react';
import { showroomScopeDecorator } from '@opuscapita/react-showroom-client';
import FormattedMessage from '../FormattedMessage/FormattedMessage.react';
import I18nContext from '../I18nContext';

window.FormattedMessage = FormattedMessage;
window.I18nContext = I18nContext;

@showroomScopeDecorator
class RegisterTranslationsScope extends Component {

  render() {
    return (
      <div>
        {this._renderChildren()}
      </div>
    )
  }
}

export default RegisterTranslationsScope;
