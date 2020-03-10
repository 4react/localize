import React, { FC, useEffect, useState } from 'react'
import { TFunction } from 'i18next'
import noop from 'lodash/noop'
import { LocalizationContext } from '../mixins/context'
import init from '../mixins/i18next'

interface LocalizationProps {
  path: string
}

const Localization: FC<LocalizationProps> = props => {
  const { path, children } = props
  const [isLoading, setIsLoading] = useState(true)
  let t: TFunction = noop

  useEffect(() => {
    loadLocales()
  }, [])

  const loadLocales = async () => {
    t = await init(path)
    setIsLoading(false)
  }

  if (isLoading) return null

  return (
    <LocalizationContext.Provider value={{ t }}>
      {children}
    </LocalizationContext.Provider>
  )
}

export default Localization
