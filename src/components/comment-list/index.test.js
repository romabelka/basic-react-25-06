import React from 'react'
import Enzyme, { render, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CommentList from './index'
import articles from '../../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  it('should render all comments closed by default', () => {
    articles.map((article) => {
      const wrapper = render(<CommentList comments={article.comments} />)

      expect(wrapper.find('.test--comment-list__body').length).toEqual(0)
    })
  })

  it('should render comments open/close button', () => {
    articles.map((article) => {
      const wrapper = render(<CommentList comments={article.comments} />)

      expect(wrapper.find('.test--comment-list__btn').length).toEqual(1)
    })
  })

  it('should open comments on click', () => {
    articles
      .filter((article) => {
        return !!article.comments
      })
      .map((article, index) => {
        const wrapper = mount(<CommentList comments={article.comments} />)
        console.log('--article', index)
        wrapper
          .find('.test--comment-list__btn')
          .at(0)
          .simulate('click')

        expect(wrapper.find('.test--comment-list__item').length).toEqual(
          article.comments.length
        )
      })
  })
})
