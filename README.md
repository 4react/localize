# @zanomate / localize

Ready-to-use set of components and helpers to provide translations in a React Application,

## tl;dr
- build over **react-i18next**
- loads translations from **/public/locales/{{lng}}/{{ns}}.json**
- only hooks

## Usage

### Init i18n
```js
import { initI18n } from '@zanomate/localize'

initI18n(
  ['en', 'it', 'es'], // languages
  ['common', 'profile'] // namespaces
)
```

### Provide localization
```js
import { Localization } from '@zanomate/localize'

const App = () => (
  <Localization>
    // content
  </Localization>
)
```

### Bound namespace
```js
import { Namespace } from '@zanomate/localize'

const ProfileSection = () => (
  <Namespace name="profile">
    // content
  </Namespace>
)
```

### Translate labels
```js
import { Localized } from '@zanomate/localize'

const CustomComponent = () => (
  <Localized label="my-label" />
)
```

## Advanced

### Fillers
You can fill labels with strings, numbers and components.
```js
// Hi, I'm {{name}} and I'm {{age}} years. Look at this {{component}}!

const CustomComponent = () => (
  <Localized
    label="my-fillable-label"
    fillers={{
      name: 'Matteo',
      age: 28,
      component: <MyCustomFiller />
    }}
  />
)
```
