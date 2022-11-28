import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import './comments.scss'
import {useQuery} from "@tanstack/react-query"
import make

const Comments = (postId) => {

  const currentUser = useContext(AuthContext);
  
  const { isLoading, error, data } = useQuery(['posts'], () => 
  makeRequest.get("/posts").then((res)=>{
      return res.data
  })
  );
  
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