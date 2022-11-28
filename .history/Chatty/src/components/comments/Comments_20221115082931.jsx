import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import './comments.scss'

const Comments = () => {

  const currentUser = useContext(AuthContext);

  //TEMPORARY
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos facere aliquid vero culpa a. Deserunt repudiandae rem, dolores ea non ipsam animi sunt! Porro quos aperiam dicta magnam! Blanditiis, veritatis?",
      name: "Black Kasema",
      userId: 1,
      profilePicture: ""
    },
    {
      id: 1,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos facere aliquid vero culpa a. Deserunt repudiandae rem, dolores ea non ipsam animi sunt! Porro quos aperiam dicta magnam! Blanditiis, veritatis?",
      name: "Black Kasema",
      userId: 1,
      profilePicture: ""
    },
  ]
  
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