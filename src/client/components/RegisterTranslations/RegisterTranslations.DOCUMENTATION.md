### Synopsis

RegisterTranslations React component.
Provides possibility to register translations using JSX notation.

*This component is not supposed to be used in production mode, but only for testing/demo easiness purpose!*

### Props Reference

| Name                          | Type                  | Description                                                |
| ------------------------------|:----------------------| -----------------------------------------------------------|
| component | string | if not defined 'test' is used |
| localeBundles | object | if not defined empty object is used |

### Code Example

```
<div>
  <I18nContext locale='en'>
    <div><FormattedMessage message="hi"/></div>
  </I18nContext>

  <I18nContext locale='en'>
    <RegisterTranslations localeBundles={{'en': {hi: 'Hello'}}}>
      <div><FormattedMessage message="hi"/></div>
    </RegisterTranslations>
  </I18nContext>
</div>
```

### Component Name

RegisterTranslations

### Tags

I18n
