import React from 'react'
import Enzyme, { render, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WrappedArticleList, { ArticleList } from './article-list'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('ArticleList', () => {
  it('should render a list of articles', () => {
    const wrapper = shallow(
      <ArticleList articles={articles} toggleOpenItem={() => {}} />
    )

    expect(wrapper.find('.test--article-list__item').length).toEqual(
      articles.length
    )
  })

  it('should render all articles closed by default', () => {
    const wrapper = render(<WrappedArticleList articles={articles} />)

    expect(wrapper.find('.test--article__body').length).toEqual(0)
  })

  it('should open article on click', () => {
    const wrapper = mount(<WrappedArticleList articles={articles} />)

    wrapper
      .find('.test--article__btn')
      .at(0)
      .simulate('click')

    expect(wrapper.find('.test--article__body').length).toEqual(1)
  })

  it('should call fetchData on init', (done) => {
    mount(<WrappedArticleList articles={articles} fetchData={() => done()} />)
  })
})
