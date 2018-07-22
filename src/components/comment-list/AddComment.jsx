import React, {PureComponent} from "react"

class AddComment extends PureComponent {

  state = {
    username: "",
    comment: "",
    error: null
  }

  render() {
    const {username, comment, error} = this.state
    return(
        <form onSubmit={(e) => this.addCommentSubmit(e)}>
          <h1>Оставить комментарий:</h1>
          {error ? <h4 style={{color: "red"}}>{error}</h4> : null}
          <input
          style={{padding: '5px'}}
          onChange={(e) => this.updateUsernameValue(e)} 
          ref={this.setInputRef} 
          value={username} 
          placeholder="Username"></input><br></br>
          <textarea
          style={{width: "300px", padding: "10px"}}
          onChange={(e) => this.updateCommentValue(e)} 
          ref={this.setTextareaRef} 
          value={comment} 
          placeholder="Comment"></textarea><br></br>
          <button type="submit">Add coment</button>
        </form>
      )
  }

  addCommentSubmit(e) {
    e.preventDefault()
    if(this.state.username.trim().length <= 3 || this.state.comment.trim().length <= 3) {
      this.setState({
        error: "Символов должно быть больше трёх!"
      })
      return false
    }
    if(!isNaN(parseFloat(this.state.username)) && isFinite(this.state.username)) {
      this.setState({
        error: "Имя юзера не должно быть числом!"
      })
    }
    else {
      alert("da")
      this.setState({
        error: null
      })
    }
  }

  updateUsernameValue(e) {
    this.setState({
      username: e.target.value
    })
  }

  updateCommentValue(e) {
    this.setState({
      comment: e.target.value
    }) 
  }

  setInputRef = ref => {
    this.input = ref
  }

  setTextareaRef = ref => {
    this.textarea = ref
  }
}

export default AddComment