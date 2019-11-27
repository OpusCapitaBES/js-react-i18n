/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-multi-comp */
import PropTypes from 'prop-types';

import React from 'react';
import I18nContext from '.';
import { expect } from 'chai';
import { mount } from 'enzyme';
import FormattedMessage from '../FormattedMessage/FormattedMessage.react.js';

class RegisterTranslations extends React.Component {
  static propTypes = {
    componentName: PropTypes.string,
    bundle: PropTypes.object
  };

  static contextTypes = {
    i18n: PropTypes.object.isRequired,
  };

  static defaultProps = {
    componentName: null,
    bundle: {}
  };

  componentWillMount() {
    this.context.i18n.register(this.props.componentName, this.props.bundle);
  }

  render() {
    return this.props.children;
  }
}

class ParentWithI18nContext extends React.Component {
  getChildContext() {
    return ({
      i18n: this.props.i18n
    });
  }

  render() {
    return this.props.children;
  }
}
ParentWithI18nContext.propTypes = {
  i18n: PropTypes.object
};
ParentWithI18nContext.childContextTypes = {
  i18n: PropTypes.object
};

class ChildWantsI18nContext extends React.Component {
  render() {
    return null;
  }
}
ChildWantsI18nContext.contextTypes = {
  i18n: PropTypes.object
};

describe('I18nContext', () => {
  describe('self context', () => {
    it('has property `i18n`', () => {
      let elementContext = mount(
        <I18nContext><div/></I18nContext>
      ).context();

      expect(elementContext).to.have.property('i18n');
    });
  });

  describe('property change should have effect', () => {
    it('`locale`', () => {
      const bundle = {
        'en': {
          hi: 'Hello',
        },
        'de': {
          hi: 'Willkomm',
        }
      };
      let element = mount(
        <I18nContext locale='de'>
          <RegisterTranslations componentName="test" bundle={bundle}>
            <FormattedMessage message='hi'/>
          </RegisterTranslations>
        </I18nContext>
      );

      expect(element.html().includes('Willkomm')).to.be.ok;
    });

    it('`overriddenTranslations`', () => {
      const bundle = {
        'en': {
          hi: 'Hello',
        }
      };
      let element = mount(
        <I18nContext locale='de' overriddenTranslations={{ hi: 'Willkomm' }}>
          <RegisterTranslations componentName="test" bundle={bundle}>
            <FormattedMessage message='hi'/>
          </RegisterTranslations>
        </I18nContext>
      );

      expect(element.html().includes('Willkomm')).to.be.ok;
      element.setProps({ locale: 'en' });
      expect(element.html().includes('Willkomm')).to.be.ok;
    })
  });

  describe('render', () => {
    it('without wrappers', () => {
      let children = (
        <div>
          <div>2</div>
          <div>3</div>
        </div>
      );

      let element = mount(<I18nContext>{children}</I18nContext>);
      expect(element.find('div')).to.have.length(3);
    });
  });
});
