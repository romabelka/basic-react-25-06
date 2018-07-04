import React from 'react'

export default (OrirginalItem) =>
  class DecoratedItem extends React.Component {
    state = {
      showItems: false
    }

    toggleShowItems = (showItems) => this.setState({ showItems })

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
