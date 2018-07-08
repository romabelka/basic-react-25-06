import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16/build/index'
import WrappedCommentList, { CommentList } from './index'
import WrappedArticleList from '../article-list'
import articles from '../../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  it('should render a list of comments', () => {
    articles.forEach(({ comments }) => {
      if (!comments) return

      const wrapper = shallow(<CommentList comments={comments} isOpen />)

      expect(wrapper.find('.test--comment-list__item').length).toEqual(
        comments.length
      )
    })
  })

  it('should render closed comments by default', () => {
    const wrapper = mount(<WrappedArticleList articles={articles} />)

    wrapper
      .find('.test--article__btn')
      .at(0)
      .simulate('click')

    expect(wrapper.find('.test--comment-list__body').length).toEqual(0)
  })

  it('should open comments on click', () => {
    const wrapper = mount(
      <WrappedCommentList comments={articles[0].comments} />
    )

    wrapper.find('.test--comment-list__btn').simulate('click')

    expect(wrapper.find('.test--comment-list__body').length).toEqual(1)
  })
})
