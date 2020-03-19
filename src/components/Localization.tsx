import React, { FC } from 'react'
import i18next from 'i18next'
import { I18nextProvider, I18nextProviderProps } from 'react-i18next'

interface LocalizationProps extends I18nextProviderProps {
  // empty
}

const Localization: FC<Omit<LocalizationProps, 'i18n'>> = props => {
  const { defaultNS = 'translations', children } = props
  return (
    <I18nextProvider i18n={i18next} defaultNS={defaultNS}>
      {children}
    </I18nextProvider>
  )
}

export default Localization
