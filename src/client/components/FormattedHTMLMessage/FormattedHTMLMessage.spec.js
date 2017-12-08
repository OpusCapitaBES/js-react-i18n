import { expect } from 'chai';
import PropTypes from 'prop-types';
import React from 'react';
import { I18nManager } from '@opuscapita/i18n';
import FormattedHTMLMessage from './FormattedHTMLMessage.react';
import { render } from 'enzyme';

class TestComponent extends React.Component {

  static propTypes = {
    message: PropTypes.string,
  };

  static childContextTypes = {
    i18n: PropTypes.object.isRequired,
  };

  getChildContext() {
    const i18n = new I18nManager({ locale: 'en-US' });

    i18n.register('TextComponent',
      {
        'en-US': {
          logo: 'They shall not pass',
        }
      }
    );

    return {
      i18n,
    };
  }

  render() {
    return (
      <FormattedHTMLMessage locale="en-US" message={this.props.message} />
    );
  }
}

describe('FormattedHTMLMessage', () => {
  it('render translation', () => {
    expect(render(<TestComponent message="logo"/>).html()).to.equal("They shall not pass");
  });

  it('render nothing', () => {
    expect(render(<TestComponent/>).html()).to.equal("");
  });
});
