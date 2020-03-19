import React, { FC, isValidElement, Fragment, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import LocalizationContext from '../mixins/context'

interface LocalizedProps {
  label: string
  ns?: string
  fillers?: { [filler: string]: any }
  lang?: string
}

const Localized: FC<LocalizedProps> = props => {
  const { label, ns, fillers = {}, lang } = props
  const { defaultNS } = useContext(LocalizationContext)
  const { t } = useTranslation(ns || defaultNS)

  const i18nextFillers: { [key: string]: string } = {}
  Object.keys(fillers).forEach(key => {
    const filler = fillers[key]
    if (isValidElement(filler)) {
      i18nextFillers[key] = `{{${key}}}`
    } else {
      i18nextFillers[key] = filler
    }
  })
  const localizedLabel = t(
    label,
    {
      ...i18nextFillers,
      ...(lang && { lng: lang })
    }
  )

  const parts = localizedLabel.split(/({{[a-zA-Z0-9]+}})/g)
  return (
    <>
      {parts.map((part, index) => {
        const matches = part.match(/{{([a-zA-Z0-9]+)}}/)
        if (matches?.length) {
          return (
            <Fragment key={index}>
              {fillers[matches[1]]}
            </Fragment>
          )
        }
        return (
          <Fragment key={index}>
            {part}
          </Fragment>
        )
      })}
    </>
  )
}

export default Localized
