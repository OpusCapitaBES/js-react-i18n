/* eslint-disable no-unused-expressions */
import React from 'react';
import I18nContext from '../I18nContext';
import { expect } from 'chai';
import { mount } from 'enzyme';
import FormattedMessage from '../FormattedMessage/FormattedMessage.react.js';
import RegisterTranslations from './RegisterTranslations.react';

describe('RegisterTranslations', () => {
  it('`works correctly`', () => {
    const bundle = {
      'es': {
        hello: 'Hola',
      }
    };

    // bundle is not registered -> no translation
    let element = mount(
      <I18nContext locale='es'>
        <FormattedMessage message='hello'/>
      </I18nContext>
    );
    expect(element.html().includes('hello')).to.be.ok;

    // bundle is registered but no required translation -> message key is rendered
    element = mount(
      <I18nContext locale='es'>
        <RegisterTranslations>
          <FormattedMessage message='hello'/>
        </RegisterTranslations>
      </I18nContext>
    );
    expect(element.html().includes('hello')).to.be.ok;

    // bundle is registered but no required translation -> translation is rendered
    element = mount(
      <I18nContext locale='es'>
        <RegisterTranslations localeBundles={bundle}>
          <FormattedMessage message='hello'/>
        </RegisterTranslations>
      </I18nContext>
    );
    expect(element.html().includes('Hola')).to.be.ok;
  });
});
