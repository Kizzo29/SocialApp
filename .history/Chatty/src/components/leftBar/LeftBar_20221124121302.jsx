import './leftbar.scss'
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import Calendar from "../../assets/calendar.png"
import FilmReel from "../../assets/film-reel.png"
import Friends from "../../assets/friends.png"
import FundRaiser from "../../assets/fundraiser.png"
import Game from "../../assets/game-controller.png"
import ImageGallery from "../../assets/image-gallery.png"
import Memories from "../../assets/memories.png"
import Messages from "../../assets/messages.png"
import Shopping from "../../assets/shopping-bag.png"
import TestPassed from "../../assets/test-passed.png"
import UserGroups from "../../assets/user-groups.png"
import Video from "../../assets/video.png"
import Tutorials from "../../assets/youtube-tutorials.png"



const LeftBar = () => {

  const {currentUser} = useContext(AuthContext);
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={"/upload/" + currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={UserGroups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Shopping} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={FilmReel} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Calendar} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Game} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={ImageGallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Video} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={FundRaiser} alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Test} alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar