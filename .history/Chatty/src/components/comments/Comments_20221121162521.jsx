import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import './comments.scss'

const Comments = () => {

  const currentUser = useContext(AuthContext);


  
  return (
    <div className="comments">
      <div className="write">
      <img src={currentUser.profilePic} alt="" />
      <input type="text" placeholder='write a comment' />
      <button>Send</button>
      </div>
      {comments.map(comment => (
      <div className="comment">
        <img src={comment.profilePicture} alt="" />
        <div className="info">
          <span>{comment.name}</span>
          <p>{comment.desc}</p>
        </div>
        <span className="date">1 hour ago</span>
      </div>
    ))}</div>
  )
}

export default Comments