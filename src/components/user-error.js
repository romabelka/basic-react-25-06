import React, { Component } from 'react'
import { userErrorSelector } from '../selectors'
import { connect } from 'react-redux'

class UserError extends Component {
  render() {
    return <div>{this.getBody()}</div>
  }

  getBody() {
    console.log('--- user-error', this.props.userError)
    if (this.props.userError && this.props.userError.length > 0) {
      return <div style={{ color: 'red' }}>{this.props.userError}</div>
    } else {
      return <div />
    }
  }
}

export default connect((state) => ({
  userError: userErrorSelector(state)
}))(UserError)
