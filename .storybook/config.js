import { addDecorator, addParameters, configure } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import withContext from './decorators/withContext'

addDecorator(withContext)
addDecorator(withKnobs)

addParameters({
  options: {
    name: '@zanomate/localize',
    showPanel: true,
    panelPosition: 'right'
  },
  knobs: {
    escapeHTML: false
  }
})

require('./style/index.css')
require('./stories/_stories.js')

configure(() => {
  require('./stories/_stories.js')
}, module)
