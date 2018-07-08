import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import CommentList from '../comment/list'
import CSSTransition from 'react-addons-css-transition-group'
import './style.css'
import Animation from '../animation'

class Index extends PureComponent {
  state = {
    error: null
  }

  componentDidCatch(error) {
    this.setState({ error })
  }

  render() {
    const { article, isOpen, disableAnimation } = this.props
    return (
      <div className="test--article__container">
        <h3>
          {article.title}
          <button onClick={this.handleClick} className="test--article__btn">
            {isOpen ? 'close' : 'open'}
          </button>
        </h3>
        <Animation
          transitionName="comment-list"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          disableAnimation={disableAnimation}
        >
          {this.body}
        </Animation>
      </div>
    )
  }

  handleClick = () => this.props.toggleOpen(this.props.article.id)

  get body() {
    const { isOpen, article } = this.props
    if (!isOpen) return null

    return (
      <section className="test--article__body">
        {article.text}
        {!this.state.error && <CommentList comments={article.comments} />}
      </section>
    )
  }
}

Index.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    comments: PropTypes.array
  }).isRequired,

  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func.isRequired
}

export default Index
