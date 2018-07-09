import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import CommentList from '../comment-list/index'
import CSSTransition from 'react-addons-css-transition-group'
import './style.css'

class Index extends PureComponent {
  state = {
    error: null
  }

  componentDidCatch(error) {
    this.setState({ error })
  }

  render() {
    const { article, isOpen } = this.props
    return (
      <div className="test--article__container">
        <h3>
          {article.title}
          <button onClick={this.handleClick} className="test--article__btn">
            {isOpen ? 'close' : 'open'}
          </button>
        </h3>
        <CSSTransition
          transitionName="article"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {this.body}
        </CSSTransition>
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
