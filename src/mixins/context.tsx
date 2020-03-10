import React, { createContext, useContext } from 'react'
import { TFunction } from 'i18next'
import noop from 'lodash/noop'

interface LocalizationContextContent {
  t: TFunction
}

export const LocalizationContext = createContext<LocalizationContextContent>({
  t: noop
})

export const useLocalization = () => useContext(LocalizationContext)
