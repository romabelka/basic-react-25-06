import React from 'react'
import Enzyme, { render, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CommentList from './index'
import articles from '../../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  it('should render no comments when closed', () => {
    const comments = articles[0].comments
    const wrapper = render(<CommentList articles={comments} />)

    expect(wrapper.find('.test--comment-list__body').length).toEqual(0)
  })

  it('should render no comments if comments are not provided', () => {
    const commentsCases = [null, [], undefined]

    for (let comments of commentsCases) {
      const wrapper = mount(<CommentList articles={comments} />)
      wrapper
        .find('.test--comment-list__btn')
        .at(0)
        .simulate('click')

      expect(wrapper.find('.test--comment-list__empty').length).toEqual(1)
    }
  })

  it('should open comments list on click', () => {
    const comments = articles[0].comments
    const wrapper = mount(<CommentList comments={comments} />)

    expect(wrapper.find('.test--comment-list__btn').length).toEqual(1)
    wrapper
      .find('.test--comment-list__btn')
      .at(0)
      .simulate('click')

    expect(wrapper.find('.test--comment-list__item').length).toEqual(
      comments.length
    )
  })
})
