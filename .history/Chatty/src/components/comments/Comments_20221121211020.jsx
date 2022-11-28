import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import './comments.scss'
import {useQuery, useMutation,useQueryClient} from "@tanstack/react-query"
import { makeRequest } from "../../axios"
import moment from 'moment'

const Comments = (postId) => {

  const currentUser = useContext(AuthContext);
  
  const { isLoading, error, data } = useQuery(['comments'], () => 
  makeRequest.get("/comments?postId=" + postId).then((res)=>{
      return res.data
  })
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newComment) => {
    return makeRequest.post("/comment", newPost)
  },
    {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["comments"])
    },
  });

  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ desc, img: imgUrl });
    setDesc("")
    setFile(null)
  };
  
  return (
    <div className="comments">
      <div className="write">
      <img src={currentUser.profilePic} alt="" />
      <input type="text" placeholder='write a comment' />
      <button>Send</button>
      </div>
      {isLoading ? "loading" 
      : data.map(comment => (
      <div className="comment">
        <img src={comment.profilePicture} alt="" />
        <div className="info">
          <span>{comment.name}</span>
          <p>{comment.desc}</p>
        </div>
        <span className="date">{moment(comment.created).fromNow}</span>
      </div>
    ))}</div>
  )
}

export default Comments