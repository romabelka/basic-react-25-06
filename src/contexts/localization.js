import React, { Component } from 'react'
import { createContext } from 'react'
import en from '../localization/en'
import ru from '../localization/ru'

const { Provider, Consumer } = createContext()

const ContextProvider = props => {
  return (
    <Provider
      value={{
        lang: props.lang,
        dictionary: getLocationDictionary(props.lang)
      }}
    >
      {props.children}
    </Provider>
  );
};

const ContextConsumer = props => {
  return (
    <Consumer>
      {context => {
        if (!!props.children && !!context.dictionary[props.children] ) {
          return context.dictionary[props.children];
        }
        return props.children;
      }}
    </Consumer>
  );
};

function getLocationDictionary(lang){
  if (lang === 'ru')
    return ru;

  return en;
}

export { ContextProvider, ContextConsumer }
