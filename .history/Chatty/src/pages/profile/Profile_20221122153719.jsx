import './profile.scss'
import { FacebookTwoTone } from '@mui/icons-material'
import { LinkedIn } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'
import { Pinterest } from '@mui/icons-material'
import { Twitter } from '@mui/icons-material'
import { Place } from '@mui/icons-material'
import { Language } from '@mui/icons-material'
import { EmailOutlined } from '@mui/icons-material'
import { MoreVert } from '@mui/icons-material'
import Posts from '../../components/posts/Posts'
import { useQuery} from '@tanstack/react-query'
import { makeRequest } from "../../axios"


const Profile = () => {

  const { isLoading, error, data } = useQuery(['user'], () => 
  makeRequest.get("/users/find/" + userId).then((res)=>{
      return res.data
  })
  );
  return (
    <div className='profile'>
      <div className="images">
        <img src="" alt="" className="cover" />
        <img src="" alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://facebook.com">
              <FacebookTwoTone fontSize='large'/>
            </a>
            <a href="https://facebook.com">
              <Instagram fontSize='large'/>
            </a>
            <a href="https://facebook.com">
              <Pinterest fontSize='large'/>
            </a>
            <a href="https://facebook.com">
              <LinkedIn fontSize='large'/>
            </a>
            <a href="https://facebook.com">
              <Twitter fontSize='large'/>
            </a>
          </div>
          <div className="center">
            <span>Black Kasema</span>
            <div className="info">
              <div className="item">
                <Place/>
                <span>Malawi</span>
              </div>
              <div className="item">
                <Language/>
                <span>kasema.app</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlined/>
            <MoreVert/>
          </div>
        </div>
        <Posts/>
      </div>
    </div>
  )
}

export default Profile