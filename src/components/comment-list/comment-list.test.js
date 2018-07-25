import React from 'react'
import { shallow } from 'enzyme'
import CommentList, { ReducerRecord as CommentsRecord } from './index'
import { normalizedComments as comments } from '../../fixtures'
import configureStore from 'redux-mock-store'
import { arrToMap } from '../../reducer/utils'
import { Record } from 'immutable'

const mockStore = configureStore()
const initState = Record({
  entities: arrToMap(comments)
})

describe('CommentList', () => {
  it('should render comments', () => {
    const store = mockStore(initState)
    const wrapper = shallow(
      <CommentList store={store} comments={comments.map((c) => c.id)} />
    )

    expect(wrapper.find('.test--comment-list__item').length).toBe(
      comments.length
    )
  })

  it('should display an empty text', () => {
    const wrapper = shallow(<CommentList />)

    expect(wrapper.find('.test--comment-list__empty').length).toBe(1)
  })
})
