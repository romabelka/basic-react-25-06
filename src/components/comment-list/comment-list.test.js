import React from 'react'
import Enzyme, { render, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WrappedArticleList, { CommentList } from './index'
import articles from '../../fixtures'

Enzyme.configure({ adapter: new Adapter() })

const comments = articles[0].comments

describe('CommentList', () => {
  it('should render comments', () => {
    const wrapper = render(
      <CommentList comments={comments} isOpen toggleOpenItem={() => {}} />
    )

    expect(wrapper.find('.test--comment-list__item').length).toEqual(
      comments.length
    )
  })
})
