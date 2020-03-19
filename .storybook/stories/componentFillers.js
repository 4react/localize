import language from '../knobs/language'
import Localized from '../../src/components/Localized'
import React from 'react'

const ComponentFillersStory = () => {
  const lang = language('lang', 'props')
  return (
    <Localized
      label="samples.components-fillers"
      lang={lang}
      fillers={{
        component: (
          <span style={{ color: 'red', fontWeight: 'bold', fontSize: 24 }}>
          <Localized label="text" lang={lang} />
        </span>
        )
      }}
    />
  )
}

export default ComponentFillersStory
