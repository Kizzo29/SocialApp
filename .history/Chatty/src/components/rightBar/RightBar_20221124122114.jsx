import './rightbar.scss'
import Pic1 from "../../assets/pexels-edson.jpg"
import Pic2 from "../../assets/pexels-ekaterina.jpg"
import pic3 from "../../assets/pexels-lalesh.jpg"

const RightBar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggested For You</span>
          <div className="user">
            <div className="userInfo">
              <img src={Pic1} alt="" />
              <span>Craig Moyo</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
       <div className="user">
           <div className="userInfo">
              <img src={Pic2} alt="" />
              <span>Linley Mussa</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
           <div className="userInfo">
              <img src={Pic1} alt="" />
              <p>
              <span>Vanessa Phiri</span> changed their cover picture
              </p>
            </div>
           <span>1 min ago</span>
          </div>
          <div className="user">
           <div className="userInfo">
              <img src={Pic1} alt="" />
              <p>
              <span>Vanessa Phiri</span> changed their cover picture
              </p>
            </div>
           <span>1 min ago</span>
          </div>
          <div className="user">
           <div className="userInfo">
              <img src={Pic1} alt="" />
              <p>
              <span>Vanessa Phiri</span> changed their cover picture
              </p>
            </div>
           <span>1 min ago</span>
          </div>
          <div className="user">
           <div className="userInfo">
              <img src={Pic1} alt="" />
              <p>
              <span>Vanessa Phiri</span> changed their cover picture </p>
            </div>
           <span> 1 min ago </span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
           <div className="userInfo">
              <img src={Pic1} alt="" />
              <div className="online"/>
              <span>Vanessa Phiri</span> 
            </div>
          </div>
          <div className="user">
           <div className="userInfo">
              <img src={Pic1} alt="" />
              <div className="online"/>
              <span>Vanessa Phiri</span> 
            </div>
          </div>
          <div className="user">
           <div className="userInfo">
              <img src={Pic1} alt="" />
              <div className="online"/>
              <span>Vanessa Phiri</span> 
            </div>
          </div>
          <div className="user">
           <div className="userInfo">
              <img src={Pic1} alt="" />
              <div className="online"/>
              <span>Vanessa Phiri</span> 
            </div>
          </div>
          <div className="user">
           <div className="userInfo">
              <img src={Pic1} alt="" />
              <div className="online"/>
              <span>Vanessa Phiri</span> 
            </div>
          </div>
          <div className="user">
           <div className="userInfo">
              <img src={Pic1} alt="" />
              <div className="online"/>
              <span>Vanessa Phiri</span> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar