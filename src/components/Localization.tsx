import React, { FC } from 'react'
import i18next from 'i18next'
import { I18nextProvider, I18nextProviderProps } from 'react-i18next'

interface LocalizationProps extends I18nextProviderProps {
  // empty
}

const Localization: FC<Omit<LocalizationProps, 'i18n'>> = props => {
  const { children, ...i18NextProps } = props
  return (
    <I18nextProvider i18n={i18next} {...i18NextProps}>
      {children}
    </I18nextProvider>
  )
}

export default Localization
