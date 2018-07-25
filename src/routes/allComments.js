import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import AllComments from './../components/AllComments'

class AllCommentsRoute extends Component {
  render() {
    return (
      <div>
        <Route exact path="/comments/:currentPag" render={this.getComment} />
      </div>
    )
  }

  getComment = (routeProps) => {
    let currentPag = --routeProps.match.params.currentPag
    return (
      <AllComments
        key={currentPag}
        routeProps={routeProps}
        currentPag={(currentPag *= 5)}
      />
    )
  }
}

export default AllCommentsRoute
