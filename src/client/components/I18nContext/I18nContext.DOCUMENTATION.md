### Synopsis

I18Context React component
Use it as a parent component if you need pass [I18nManager](https://github.com/OpusCapita/i18n/blob/master/src/utils/I18nManager.js) to children [context](https://facebook.github.io/react/docs/context.html)
Instance of I18nManager is exposed under name `i18n` into context

*This component is not supposed to be used in production mode, but only for testing/demo easiness purpose!*

### Props Reference

| Name                          | Type                  | Description                                                |
| ------------------------------|:----------------------| -----------------------------------------------------------|
| locale | string | Any string indentify locale. Examples: 'en', 'de'. It don't follow [BCP 47](https://tools.ietf.org/html/bcp47) or any another standard |
| fallabackLocale | string | Fallback. If message not found try to find it at another locale |
| localeFormattingInfo | object | Example: `{ en: { datePattern: 'MM/dd/yyyy' }, ru: { datePattern: 'dd/MM/yyyy' } }` See description [here](https://github.com/OpusCapita/i18n) |

### Code Example

```
<div>
  See I18nContext component usage in RegisterTraslations component demo/examples
</div>
```

### Component Name

I18nContext

### Tags

I18n
