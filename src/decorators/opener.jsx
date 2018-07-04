import React, {Component} from "react"

export default (Origin) => class Opener extends Component {

  state = {
    ifShown: false
  }

  render() {
    return(
        <Origin showItem={this.toggle} {...this.props} {...this.state}/>
      )
  }

  toggle = () => {
    this.setState({
      ifShown: !this.state.ifShown
    })
  }
}