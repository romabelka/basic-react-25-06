import React from 'react'

export default (OriginalComponent) =>
  class slider extends React.Component {
    state = {
      currentIndex: 0,
      items: []
    }

    createSlider = (items) => {
      console.log(items)
      this.setState({ items })
    }

    previousSlide = () => {
      const { currentIndex, items } = this.state
      const lastIndex = items.length - 1
      const shouldResetIndex = currentIndex === 0
      const index = shouldResetIndex ? lastIndex : currentIndex - 1

      this.setState({
        currentIndex: index
      })
    }

    nextSlide = () => {
      const { currentIndex, items } = this.state
      const lastIndex = this.state.items.length - 1
      const shouldResetIndex = currentIndex === lastIndex
      const index = shouldResetIndex ? 0 : currentIndex + 1

      this.setState({
        currentIndex: index
      })
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          previousSlide={this.previousSlide}
          nextSlide={this.nextSlide}
          createSlider={this.createSlider}
        />
      )
    }
  }
