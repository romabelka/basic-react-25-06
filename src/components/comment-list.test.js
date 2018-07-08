import React from 'react'
import Enzyme, { render, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WrappedCommentList, { CommentList } from './comment-list'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })
const comments = articles[0].comments

describe('ArticleList', () => {
  it('should render a list of comments in article', () => {
    const wrapper = shallow(
      <CommentList
        comments={comments}
        toggleOpenItem={() => {}}
        isOpen={true}
      />
    )

    expect(wrapper.find('.test--comment-list__item').length).toEqual(
      comments.length
    )
  })

  it('should render all comments closed by default', () => {
    const wrapper = render(<WrappedCommentList comments={comments} />)

    expect(wrapper.find('.test--comment-list__item').length).toEqual(0)
  })

  it('should open comments on click', () => {
    const wrapper = mount(<WrappedCommentList comments={[]} />)

    wrapper
      .find('.test--comment-list__btn')
      .at(0)
      .simulate('click')

    expect(wrapper.find('.test--comment-list__body').length).toEqual(1)
  })
})
