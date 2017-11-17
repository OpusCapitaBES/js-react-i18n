[![CircleCI Status](https://circleci.com/gh/OpusCapita/react-i18n/tree/master.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/OpusCapita/react-i18n)
[![Coverage Status](https://coveralls.io/repos/github/OpusCapita/react-i18n/badge.svg)](https://coveralls.io/github/OpusCapita/react-i18n)
[![npm version](https://img.shields.io/npm/v/@opuscapita/react-i18n.svg)](https://npmjs.org/package/@opuscapita/react-i18n)
[![Dependency Status](https://img.shields.io/david/OpusCapita/react-i18n.svg)](https://david-dm.org/OpusCapita/react-i18n)
[![NPM Downloads](https://img.shields.io/npm/dm/@opuscapita/react-i18n.svg)](https://npmjs.org/package/@opuscapita/react-i18n)
![badge-license](https://img.shields.io/github/license/OpusCapita/react-i18n.svg)


# OpusCapita React i18n

[i18n module](https://github.com/OpusCapita/i18n) extension for React applications that provides several components (tags) for rendering i18n messages.

## Assumptions

Everything is stored in _i18n_ (I18nManager instance) object in scope of React context.

## Usage

### App

React application should initialize _i18n_ object and propagate it for child components.

```javascript
/**
 * App
 */
class App extends React.Component {
  static propTypes = {
    locale: React.PropTypes.string.isRequired
  };

  static childContextTypes = {
    i18n: React.PropTypes.object.isRequired
  };

  getChildContext() {
    return {
        i18n: new I18nManager(this.props.locale)
    };
  }

  render() {
    return (

      <div>
        <MyComponent />
      </div>

      );
  }
}

export default function(element, props) {
  return React.render(<App {...props} locale="en-US" />, element);
};
```

### Component

Each component may register own messages in global _i18n_ using _register_ method of I18nManager.

```javascript

/**
 * Root element of custom component.
 */
class MyComponent extends React.Component {
  static contextTypes = {
    i18n: React.PropTypes.object.isRequired
  };

  static childContextTypes = {
    i18n: React.PropTypes.object.isRequired
  };

  getChildContext() {
    const translations = [{
      locales : ['en-US'],
      messages: {
          logo: {
              title: 'Title',
              text: 'Text'
          }
      }
    }];

    return {
        i18n: this.context.i18n.register('MyComponent', translations)
    };
  }

  render() {
    return (
      <header className="header-style">
        <a href="#" className="logo-style" title={this.context.i18n.getMessage('logo.title')}>
          <FormattedMessage message="logo.text" />
        </a>
      </header>
    );
  }
}

```

## Development

### Run code linting

```bash
npm run lint
```

### Run tests

```bash
npm test
```

### Start demo

```bash
npm start
```
