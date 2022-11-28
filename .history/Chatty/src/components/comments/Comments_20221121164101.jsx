import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import './comments.scss'
import {useQuery} from "@tanstack/react-query"
import { makeRequest } from "../../axios"
import moment from 'moment'

const Comments = (postId) => {

  const currentUser = useContext(AuthContext);
  
  const { isLoading, error, data } = useQuery(['comments'], () => 
  makeRequest.get("/comments?postId=" + postId).then((res)=>{
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
      {data.map(comment => (
      <div className="comment">
        <img src={comment.profilePicture} alt="" />
        <div className="info">
          <span>{comment.name}</span>
          <p>{comment.desc}</p>
        </div>
        <span className="date">{moment(comment)}</span>
      </div>
    ))}</div>
  )
}

export default Comments