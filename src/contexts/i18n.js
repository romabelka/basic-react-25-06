import { createContext } from 'react'
import labels from '../labels'

export const { Provider, Consumer } = createContext(labels.en)
