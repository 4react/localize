# @zanomate / localize

Components and helpers to provide translations in a React Application

## tl;dr
- fixed configuration:
    - loads translations from **/public/locales/{{lng}}/{{ns}}.json**
- use **i18next**:
    - react-i18next
    - i18next-xhr-backend
    - i18next-browser-languagedetector

## Usage

### Init i18next
Use the *initI18n* utility to initialize i18next with standard configurations.
```js
import { initI18n } from '@zanomate/localize'

initI18n(
  ['en', 'it', 'es'], // languages
  ['common', 'profile'] // namespaces
)
```

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| languages | string[] | ['en'] | Set of supported languages. The first element is considered as fallback. |
| namespaces | string[] | ['translations'] | Set of supported namespaces. |

### Provide localization
Use the `Localization` component to provide translations over the application.
```js
import { Localization } from '@zanomate/localize'

const App = () => (
  <Localization>
    // content
  </Localization>
)
```
| Props | Type | Default | Description |
| --- | --- | --- | --- |
| defaultNS | string | 'translations' | *[optional]* Specify the default namespace. |

### Translate labels
Use the `Localized` component to translate labels.

```js
import { Localized } from '@zanomate/localize'

const CustomComponent = () => (
  <Localized label="awesome" />
)
```

Translations are rendered as simple text with no additional style or structure.

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| label | string | - | Label to localize. |
| ns | string | - | *[optional]* Namespace to witch the label belongs. In case of no namespace specified, the `defaultNS` of the `Localization` component is used. |
| fillers | object | - | *[optional]* Maps of elements to fills placeholders in label. Fillers could be of type **string, number or components**. |
| lang | string | - | *[optional]* Language to override the current selected one. |

A more complex example.

```js
// Hi, I'm {{name}} and I'm {{age}} years. Look at this {{component}}!

const CustomComponent = () => (
  <Localized
    label="my-fillable-label"
    ns="profile"
    fillers={{
      name: 'Matteo',
      age: 28,
      component: <MyCustomFiller />
    }}
  />
)
```
