import React from 'react'
import Localization from '../../src/components/Localization'
import initI18n from '../../src/helpers/initI18n'
import Namespace from '../../src/components/Namespace'

initI18n(['en', 'it'], ['stories'])

const withContext = (Story) => {
  return (
    <Localization>
      <Namespace name="stories">
        <Story />
      </Namespace>
    </Localization>
  )
}

export default withContext
