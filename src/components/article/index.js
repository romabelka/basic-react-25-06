import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CommentList from '../comment-list'
import CSSTransition from 'react-addons-css-transition-group'
import { deleteArticle } from '../../ac'
import './style.css'

class Article extends PureComponent {
  state = {
    error: null
  }

  componentDidCatch(error) {
    this.setState({ error })
  }

  render() {
    const { articles, isOpen, id } = this.props
    return (
      <div className="test--article__container">
        <h3>
          {articles[id].title}
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

  handleClick = () => {
    this.props.toggleOpen(this.props.id)
  }

  handleDelete = () => {
    const { id, deleteArticle } = this.props
    deleteArticle(id)
  }

  get body() {
    const { isOpen, articles, id } = this.props
    if (!isOpen) return null

    return (
      <section className="test--article__body">
        {articles[id].text}
        {!this.state.error && <CommentList comments={articles[id].comments} />}
      </section>
    )
  }
}

Article.propTypes = {
  id: PropTypes.string,

  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func.isRequired
}

export default connect(
  (state) => {
    return {
      articles: state.articles
    }
  },
  { deleteArticle }
)(Article)
