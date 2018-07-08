import React from 'react'
import Enzyme, { render, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WrappedCommentList from './index'
import articles from '../../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  it('should render a list of comments', () => {
    const wrapper = shallow(
      <WrappedCommentList comments={articles[0].comments} />
    )
    setTimeout(() => {
      wrapper
        .find('.test--comment-list__btn')
        .at(0)
        .simulate('click')
      expect(
        wrapper.find('.test--comment-list__item .test--comment__body').length
      ).toEqual(5)
      expect(wrapper.find('.test--comment-list__item ').length).toEqual(5)
    }, 1000)
  })

  it('should render no comments for empty comment list', () => {
    const wrapper = shallow(<WrappedCommentList />)
    setTimeout(() => {
      wrapper
        .find('.test--comment-list__btn')
        .at(0)
        .simulate('click')
      expect(wrapper.find('.test--comment-list__item').length).toEqual(0)
      expect(wrapper.find('.test--comment-list__empty').length).toEqual(1)
    }, 1000)
  })

  it('should render comment list closed by default', () => {
    const wrapper = render(
      <WrappedCommentList comments={articles[0].comments} />
    )

    expect(wrapper.find('.test--comment-list__item').length).toEqual(0)
  })

  it('should open comment list on click', () => {
    const wrapper = mount(
      <WrappedCommentList comments={articles[0].comments} />
    )

    wrapper
      .find('.test--comment-list__btn')
      .at(0)
      .simulate('click')

    expect(
      wrapper.find('.test--comment-list__item .test--comment__body').length
    ).toEqual(5)
  })

  it('should close comment list on click', () => {
    const wrapper = mount(
      <WrappedCommentList comments={articles[0].comments} />
    )

    wrapper
      .find('.test--comment-list__btn')
      .at(0)
      .simulate('click')

    setTimeout(() => {
      wrapper
        .find('.test--comment-list__btn')
        .at(0)
        .simulate('click')
      expect(wrapper.find('.test--comment-list__item').length).toEqual(0)
    }, 1000)
  })
})
