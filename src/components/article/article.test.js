import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Article from '../article'
import articles from '../../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('Article Test', () => {
  const article = articles[0]

  it('should close the article on click', () => {
    const wrapper = mount(
      <Article article={article} isOpen toggleOpen={() => {}} />
    )

    // console.log(wrapper.html())

    wrapper
      .find('[data-test-article-close]')
      .at(0)
      .simulate('click')
    expect(wrapper.find('.test--article__body').length).toEqual(1)
  })
})
