import React from 'react'
import Enzyme, { render, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WrappedCommentList, { CommentList } from './index'
import articles from '../../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentsList', () => {
  let wrapper
  let article

  beforeEach(() => {
    article = articles.filter(function(item) {
      return item.comments && item.comments.length
    })[0]
  })

  it('should render a list of comments', () => {
    wrapper = render(<CommentList comments={article.comments} isOpen />)
    expect(wrapper.find('.test--comments__item').length).toEqual(
      article.comments.length
    )
  })

  it('should render comments closed by default', () => {
    wrapper = render(<CommentList comments={article.comments} />)
    expect(wrapper.find('.test--comments__item').length).toEqual(0)
  })

  it('should open comments on click', () => {
    wrapper = mount(<CommentList comments={article.comments} isOpen />)
    wrapper.find('.test--comments__btn').simulate('click')
    expect(wrapper.find('.test--comments__container').length).toEqual(1)
  })

  it('should closed comments on click', () => {
    wrapper = mount(<CommentList comments={article.comments} isOpen />)
    wrapper
      .find('.test--comments__btn')
      .simulate('click')
      .simulate('click')
    expect(wrapper.props().isOpen).toEqual(true)
  })
})
