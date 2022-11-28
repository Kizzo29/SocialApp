import "./share.scss";
//import Image from "../../assets/img.png";
//import Map from "../../assets/map.png";
//import Friend from "../../assets/friend.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import {useMutation,useQueryClient,} from '@tanstack/react-query'

const Share = () => {
  const [file,setFile] = useState(null)
  const [desc,setDesc] = useState("")

  const {currentUser} = useContext(AuthContext);

  const queryClient = useQueryClient()

  const mutation = useMutation((newPost) => {
    
    
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  const handleClick = e => {
    e.preventDefault()
  }
  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img
            src={currentUser.profilePic}
            alt=""
          />
          <input type="text" placeholder={`What's on your mind ${currentUser.name}?`}
           onChange={(e) => setFile(e.target.files[0])}/>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{display:"none"}} />
            <label htmlFor="file">
              <div className="item">
                <img src="" alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src="" alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src="" alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button onClick={handleClick}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
