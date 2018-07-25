import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './app'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// todo 1. Создать АС для загрузки комментариев (узнать общее количество из параметра total)
// todo 2. Создать routes/comments и определить в нем количество подссылок (в compDidMount сделать первый запрос)
// todo 3. Создать компонент paginated-comment-list, передавать в него id страницы (null - для страниц 1-5, 2 для 6-10 и т.д.)
// todo 4. Создать компонент pagination-bar передавать в него общее кол-во и id страницы (null - для страниц 1-5, 2 для 6-10 и т.д.)
// todo 4.1. Учесть в компоненте pagination-bar состояние кнопок next и prev
