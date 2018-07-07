import React from 'react'
import Enzyme, { render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ArticleList from './../components/article-list.js'
import articles from './../fixtures.js'
Enzyme.configure({ adapter: new Adapter() })

describe('ArticleList', () => {
  it('Проверка на рендер всех статей', () => {
    const wrapper = render(<ArticleList articles={articles} />)

    expect(wrapper.find('.test--article__container').length).toEqual(
      articles.length
    )
  })

  it('Все ли статьи закрыты по умолчанию', () => {
    const wrapper = render(<ArticleList articles={articles} />)

    expect(wrapper.find('.test--article__body').length).toEqual(0)
  })

  it('По клику показывается текст статьи', () => {
    const wrapper = mount(<ArticleList articles={articles} />)

    wrapper
      .find('.test--article__btn')
      .at(0)
      .simulate('click')

    expect(wrapper.find('.test--article__body').length).toEqual(1)
  })

  // comments, нужно ли было для комментов заводить отдельный файл?
  // если да, там тоже надо будет импортить
  // article-list (пропсы передать)?

  it('Комменты закрыты по умолчанию', () => {
    const wrapper = mount(<ArticleList articles={articles} />)

    wrapper
      .find('.test--article__btn')
      .at(0)
      .simulate('click')

    expect(wrapper.find('.test--coment').length).toEqual(0)
  })

  it('Открывается ли комментарий', () => {
    const wrapper = mount(<ArticleList articles={articles} />)

    wrapper
      .find('.test--article__btn')
      .at(0)
      .simulate('click')

    wrapper
      .find('.test--comment-open-btn')
      .at(0)
      .simulate('click')

    expect(wrapper.find('.test--coment').length > 0)
  })

  it('Коммент закрывается при закрытии статьи', () => {
    const wrapper = mount(<ArticleList isTest={true} articles={articles} />)
    // я так понял из-за анимации не успевает сработать,
    // пришлось передать доп. проп (если тест то убираем анимашку)
    // это норм решение или есть получше?

    wrapper
      .find('.test--article__btn')
      .at(0)
      .simulate('click')

    wrapper
      .find('.test--comment-open-btn')
      .at(0)
      .simulate('click')

    wrapper
      .find('.test--article__btn')
      .at(0)
      .simulate('click')

    wrapper
      .find('.test--article__btn')
      .at(0)
      .simulate('click')

    expect(wrapper.find('.test--coment').length).toEqual(0)
  })

  it('Все комментарии рендерятся', () => {
    const wrapper = mount(<ArticleList articles={articles} />)

    wrapper
      .find('.test--article__btn')
      .at(0)
      .simulate('click')

    wrapper
      .find('.test--comment-open-btn')
      .at(0)
      .simulate('click')

    expect(wrapper.find('.test--coment').length).toEqual(
      articles[0].comments.length
    )
  })
})
