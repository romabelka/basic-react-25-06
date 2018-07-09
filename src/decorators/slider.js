import React from 'react'
import CSSTransition from 'react-addons-css-transition-group'

export default (OriginalComponent) =>
  class slider extends React.Component {
    state = {
      currentIndex: 0,
      items: [],
      num: 0
    }

    createSlider = (items) => {
      this.setState({ items })
    }

    previousSlide = () => {
      const { currentIndex, items } = this.state
      const lastIndex = items.length - 1
      const shouldResetIndex = currentIndex === 0
      const index = shouldResetIndex ? lastIndex : currentIndex - 1

      this.setState({
        currentIndex: index,
        num: (this.state.num + 1) % 2
      })
    }

    nextSlide = () => {
      const { currentIndex, items } = this.state
      const lastIndex = this.state.items.length - 1
      const shouldResetIndex = currentIndex === lastIndex
      const index = shouldResetIndex ? 0 : currentIndex + 1

      this.setState({
        currentIndex: index,
        num: (this.state.num + 1) % 2
      })
    }

    render() {
      return (
        <CSSTransition
          transitionName="fade"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={1}
        >
          <OriginalComponent
            key={this.state.num}
            {...this.props}
            {...this.state}
            previousSlide={this.previousSlide}
            nextSlide={this.nextSlide}
            createSlider={this.createSlider}
          />
        </CSSTransition>
      )
    }
  }
