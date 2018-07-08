import React from 'react'
import Enzyme, { render, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WrappedCommentList, { CommentList } from './index'
import articles from '../../../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  it('should render a list of comments', () => {
    const comments = articles[0].comments

    const wrapper = shallow(
      <CommentList comments={comments} isOpen={true} toggleOpen={() => {}} />
    )

    expect(wrapper.find('.test--comment-list__item').length).toEqual(
      comments.length
    )
  })

  it('should render no comments message', () => {
    const wrapper = shallow(
      <CommentList comments={[]} isOpen={true} toggleOpen={() => {}} />
    )

    expect(wrapper.find('.test--comment-list__no-comments').length).toEqual(1)
  })

  it('should render all comments closed by default', () => {
    const comments = articles[0].comments

    const wrapper = render(<WrappedCommentList comments={comments} />)

    expect(wrapper.find('.test--comment-list__item').length).toEqual(0)
  })

  it('should toggle comments on click', () => {
    const comments = articles[0].comments

    const wrapper = mount(
      <WrappedCommentList comments={comments} disableAnimation={true} />
    )
    const button = wrapper.find('.test--comment-list__open-btn').at(0)

    button.simulate('click')

    expect(wrapper.find('.test--comment-list__item').length).toEqual(
      comments.length
    )

    button.simulate('click')

    expect(wrapper.find('.test--comment-list__item').length).toEqual(0)
  })
})
