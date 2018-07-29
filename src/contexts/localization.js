import { createContext } from 'react'

export const localization = {
  en: {
    language: 'English',
    user: {
      form: {
        name: 'User name:'
      }
    },
    menu: {
      mainMenu: 'Main menu:',
      articles: 'Articles',
      comments: 'Comments',
      filters: 'Filters',
      counter: 'Counter'
    },
    article: {
      close: 'close',
      open: 'open',
      delete: 'delete',
      route: {
        selectArticles: 'Please select an article'
      }
    },
    comment: {
      list: {
        show: 'show comments',
        hide: 'hide comments'
      },
      form: {
        user: 'user',
        comment: 'comment',
        submit: 'add'
      }
    },
    counter: {
      increment: 'increment'
    },
    filter: {
      select: {
        placeholder: 'Select'
      },
      dateRange: {
        locale: 'en'
      }
    },
    loader: {
      loading: 'Loading...'
    }
  },
  ru: {
    language: 'Русский',
    user: {
      form: {
        name: 'Имя пользователя:'
      }
    },
    menu: {
      mainMenu: 'Главное меню:',
      articles: 'Статьи',
      comments: 'Комментарии',
      filters: 'Фильтры',
      counter: 'Счётчик'
    },
    article: {
      close: 'закрыть',
      open: 'открыть',
      delete: 'удалить',
      route: {
        selectArticles: 'Выберите, пожалуйста, статью'
      }
    },
    // comments list
    comment: {
      list: {
        show: 'показать комментарии',
        hide: 'скрыть комментарии'
      },
      form: {
        user: 'пользователь',
        comment: 'комментарий',
        submit: 'добавить'
      }
    },
    counter: {
      increment: 'увеличить'
    },
    // filter
    filter: {
      select: {
        placeholder: 'Выбрать'
      },
      dateRange: {
        locale: 'ru'
      }
    },
    // loader
    loader: {
      loading: 'Загрузка...'
    }
  }
}

const { Provider, Consumer } = createContext(localization.en)

export { Provider, Consumer }
