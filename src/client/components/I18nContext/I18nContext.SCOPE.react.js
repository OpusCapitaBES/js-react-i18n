import React from 'react';
import { showroomScopeDecorator } from '@opuscapita/react-showroom-client';

@showroomScopeDecorator
class I18nContextScope extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      savedContext: context
    };
  }

  render() {
    return (
      <div>
        {this._renderChildren()}
      </div>
    );
  }
}

export default I18nContextScope;
