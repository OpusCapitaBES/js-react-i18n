import React from 'react';

export default class FormattedHTMLMessage extends React.Component {
  static propTypes = {
    message: React.PropTypes.string,
  };

  static contextTypes = {
    i18n: React.PropTypes.object.isRequired,
  };

  render() {
    let { message, ...messageArguments } = this.props;
    if (message) {
      message = this.context.i18n.getMessage(message, messageArguments);
    }

    return (<span dangerouslySetInnerHTML={ { __html: message } } />);
  }
}
