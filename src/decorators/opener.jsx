import React, {Component} from "react"

export default (Origin) => class Opener extends Component {

  state = {
    ifShown: false
  }

  render() {
    return(
        <Origin showComments={this.toggle} {...this.props} {...this.state}/>
      )
  }

  toggle = () => {
    this.setState({
      ifShown: !this.state.ifShown
    })
  }
}