import React, {Component} from "react";

class CommentList extends Component {
  render() {
    return(
      <ul>
        {this.comments}
      </ul>
    )
  }

  get comments() {
    const {comments} = this.props
    return comments ? comments.map((elem) => {
      return(
        <li key={elem.id}>
          <h3>{elem.user}</h3>
          <br></br>
          {elem.text}
        </li>
        )
    }) : "Комментариев нет."    
  }
}

export default CommentList