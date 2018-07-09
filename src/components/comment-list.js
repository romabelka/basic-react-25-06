import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'
import toggleOpen from '../decorators/toggleOpen'
import CSSTransition from 'react-addons-css-transition-group'
import slider from '../decorators/slider'

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  /*
  static defaultProps = {
    comments: []
  }
*/

  render() {
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button onClick={toggleOpen}>{text}</button>
        <CSSTransition
          transitionName="fade"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={1}
        >
          {this.comments}
        </CSSTransition>
      </div>
    )
  }

  componentDidMount() {
    const { comments } = this.props
    console.log(this.props)
    this.props.createSlider(comments)
  }

  get comments() {
    const { isOpen, items, currentIndex, previousSlide, nextSlide } = this.props
    if (!isOpen || !items.length) return null

    const body = items.length ? (
      <div>
        <div onClick={previousSlide}>prev</div>
        <div onClick={nextSlide}>next</div>

        <Comment comment={items[currentIndex]} />
      </div>
    ) : (
      <h3>No comments yet</h3>
    )

    return <div>{body}</div>
  }
}

export default toggleOpen(slider(CommentList))
