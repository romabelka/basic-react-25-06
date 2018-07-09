import React from 'react'
import Enzyme, { render, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CommentList from './comment-list/index'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  it('should render a closed list of article`s comments', () => {
    const comments = articles[0].comments
    const wrapper = render(<CommentList comments={comments} />)

    expect(wrapper.find('.test--comment-list__item')).toHaveLength(0)
  })

  it('should render a list of article`s comments', () => {
    const comments = articles[0].comments
    const wrapper = mount(<CommentList comments={comments} />)

    wrapper.find('.test--comment-list__toggle-button').simulate('click')

    expect(wrapper.find('.test--comment-list__item')).toHaveLength(
      comments.length
    )
  })
})
