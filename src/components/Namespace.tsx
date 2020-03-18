import React, { createContext, FC, useContext } from 'react'

type NamespaceContextValue = string | undefined

const NamespaceContext = createContext<NamespaceContextValue>(undefined)

export const useNamespace = (): NamespaceContextValue => useContext(NamespaceContext)

interface NamespaceProps {
  name: string
}

const Namespace: FC<NamespaceProps> = props => {
  const { name, children } = props
  return (
    <NamespaceContext.Provider value={name}>
      {children}
    </NamespaceContext.Provider>
  )
}

export default Namespace
