import { createContext } from 'react'
import locales from '../../locales'

export const { Provider, Consumer } = createContext(locales.en)
