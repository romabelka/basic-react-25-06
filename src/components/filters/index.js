import React, { Component } from 'react'
import DateRange from './date-range'
import SelectFilter from './select'

class Filters extends Component {
  static propTypes = {}

  render() {
    return (
      <div className="row navbar-form">
        <div class="col-md-6">
          <SelectFilter
            articles={this.props.articles}
            className="col-md-6 col-lg-offset-0"
          />
        </div>
        <div class="col-md-6">
          <DateRange />
        </div>
      </div>
    )
  }
}

export default Filters
