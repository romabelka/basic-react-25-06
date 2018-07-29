import React from 'react'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WrappedCommentList, { CommentList } from './comment-list'
import articles from '../../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  const comments = articles[0].comments

  it('should render a list of closed comments', () => {
    const wrapper = shallow(<WrappedCommentList comments={comments} />)
    expect(wrapper.find('[data-test-comments]').length).toEqual(0)
  })

  it('should render a list of open comments', () => {
    const wrapper = mount(
      <CommentList comments={comments} isOpen={true} toggleOpen={() => {}} />
    )
    expect(wrapper.find('[data-test-comment]').length).toEqual(comments.length)
  })

  it('open list of comments on click', () => {
    const wrapper = mount(<WrappedCommentList comments={comments} />)

    wrapper
      .find('[data-test-open-comments-btn]')
      .at(0)
      .simulate('click')

    expect(wrapper.find('[data-test-comment]').length).toEqual(comments.length)
  })
})
