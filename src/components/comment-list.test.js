import React from 'react'
import Enzyme, { render, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WrappedCommentsList, { CommentList } from './comment/comment-list'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('<CommentList />', () => {
  it('should render a list of comments', () => {
    const comments = articles[0].comments

    const wrapper = shallow(
      <CommentList comments={comments} isOpen={true} toggleOpen={() => {}} />
    )

    expect(wrapper.find('.test--comment-list__item').length).toEqual(
      comments.length
    )
  })
  it('should render message about empty comments', () => {
    const wrapper = shallow(
      <CommentList comments={[]} isOpen={true} toggleOpen={() => {}} />
    )

    expect(wrapper.find('.text--message-empty-list').length).toEqual(1)
  })
  it('should open comments on click', () => {
    const wrapper = mount(<WrappedCommentsList comments={[]} />)

    wrapper
      .find('.test--comment__btn')
      .at(0)
      .simulate('click')

    expect(wrapper.find('.test--comment__body').length).toEqual(1)
  })
})
