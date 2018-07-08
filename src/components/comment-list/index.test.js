import React from 'react'
import Enzyme, { render, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WrappedCommentList, { CommentList } from './index'
import articles from '../../fixtures'

const comments = articles[0].comments

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  it('should render a list of comments', () => {
    const wrapper = render(<CommentList comments={comments} isOpen />)
    expect(wrapper.find('.test--comment-list__item').length).toEqual(
      comments.length
    )
  })

  it('should hide all comments by default', () => {
    const wrapper = render(<WrappedCommentList comments={comments} />)

    expect(wrapper.find('.test--comment-list__item').length).toEqual(0)
  })

  it('should not render comments if null, undefined or empty array are passed', () => {
    let wrapper = render(<CommentList comments={undefined} isOpen />)
    expect(wrapper.find('.test--comment-list__body_alt').length).toEqual(1)

    wrapper = render(<CommentList comments={null} isOpen />)
    expect(wrapper.find('.test--comment-list__body_alt').length).toEqual(1)

    wrapper = render(<CommentList comments={[]} isOpen />)
    expect(wrapper.find('.test--comment-list__body_alt').length).toEqual(1)
  })

  it('should open comments on click', () => {
    const wrapper = mount(<WrappedCommentList comments={comments} />)

    wrapper
      .find('.test--comment-list__button')
      .at(0)
      .simulate('click')

    expect(wrapper.find('.test--comment-list__item').length).toEqual(
      comments.length
    )
  })
})
