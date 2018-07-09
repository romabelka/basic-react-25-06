import React from 'react'
import CSSTransition from 'react-addons-css-transition-group'

export default (OriginalComponent) =>
  class slider extends React.Component {
    components = [
      () => (
        <OriginalComponent
          {...this.props}
          {...this.state}
          previousSlide={this.previousSlide}
          nextSlide={this.nextSlide}
          createSlider={this.createSlider}
        />
      ),
      () => (
        <OriginalComponent
          {...this.props}
          {...this.state}
          previousSlide={this.previousSlide}
          nextSlide={this.nextSlide}
          createSlider={this.createSlider}
        />
      )
    ]

    state = {
      currentIndex: 0,
      items: [],
      component: 0
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
        component: (this.state.component + 1) % 2
      })
    }

    nextSlide = () => {
      const { currentIndex, items } = this.state
      const lastIndex = this.state.items.length - 1
      const shouldResetIndex = currentIndex === lastIndex
      const index = shouldResetIndex ? 0 : currentIndex + 1

      this.setState({
        currentIndex: index,
        component: (this.state.component + 1) % 2
      })
    }

    render() {
      const Comp = this.components[this.state.component]
      return (
        <CSSTransition
          transitionName="fade"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={1}
        >
          <Comp key={this.state.component} />
        </CSSTransition>
      )
    }
  }
