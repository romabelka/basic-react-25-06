import React from 'react'

export default (OrirginalItem) =>
  class DecoratedItem extends React.Component {
    state = {
      isShow: false
    }

    toggleShowItems = () =>
      this.setState((prevState) => ({
        isShow: !prevState.isShow
      }))

    render() {
      return (
        <OrirginalItem
          {...this.props}
          {...this.state}
          toggleShowItems={this.toggleShowItems}
        />
      )
    }
  }
