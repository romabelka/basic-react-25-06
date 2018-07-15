import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CommentList from '../comment-list'
import CSSTransition from 'react-addons-css-transition-group'
import { deleteArticle } from '../../ac'
import { articleSelector } from '../../selectors'
import './style.css'

class Article extends PureComponent {
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
          <button onClick={this.handleDelete}>delete me</button>
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

  handleClick = () => this.props.toggleOpen(this.props.id)

  handleDelete = () => {
    const { id, deleteArticle } = this.props
    deleteArticle(id)
  }

  get body() {
    const { isOpen, article, id } = this.props
    if (!isOpen) return null

    return (
      <section className="test--article__body">
        {article.text}
        {!this.state.error && (
          <CommentList articleId={id} comments={article.comments} />
        )}
      </section>
    )
  }
}

Article.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    comments: PropTypes.array
  }).isRequired,

  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func.isRequired
}

const initMapStateToProps = () => {
  return (state, ownProps) => ({
    article: articleSelector(state, ownProps)
  })
}

export default connect(
  initMapStateToProps,
  { deleteArticle }
)(Article)
