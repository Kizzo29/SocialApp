import { useState } from "react";
import "./post.scss";
import { FavoriteOutlined } from "@mui/icons-material";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import { TextsmsOutlined } from "@mui/icons-material";
import { ShareOutlined } from "@mui/icons-material";
import { MoreHoriz } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import moment from "moment"
import { useQuery} from '@tanstack/react-query'
import { makeRequest } from "../../axios"


const Post = ({post}) => {
    const [commentOpen, setCommentOpen] = useState(false);

    const { isLoading, error, data } = useQuery(['likes'], () => 
    makeRequest.get("/likes?postId="+post.id).then((res)=>{
        return res.data
    })
    );

 
  return (
    <div className="post">
      <div className="container">
        <div className="user">
            <div className="userInfo">
                <img src={post.profilePic} alt="" />
                <div className="details">
                    <Link to={`/profile/${post.userId}`} style={{textDecoration:"none", color:"inherit"}}>
                    <span>{post.name}</span>
                    </Link>
                    <span className="date">{moment(post.created).fromNow()}</span>
                </div>
            </div>
            <MoreHoriz/>
        </div>
        <div className="content">
            <p>{post.desc}</p>
            <img src={"./upload/" + post.img} alt="" />
        </div>
        <div className="info">
            <div className="item">
               {liked ? <FavoriteOutlined style={{color:"red"}}/> : <FavoriteBorderOutlined/>}
                12 Likes
            </div>
            <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
             <TextsmsOutlined/>
                12 Comments
            </div>
            <div className="item">
               <ShareOutlined/>
                12 Shared
            </div>
        </div>
       {commentOpen && <Comments postId={post.id}/>}
     </div>
    </div>
  )
}

export default Post