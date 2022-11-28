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
import { useLocation } from 'react-router-dom'


const Profile = () => {

  const {currentUser} = useContext(AuthContext);
  const userId = parse(useLocation().pathname.split("/")[2])

  const { isLoading, error, data } = useQuery(['user'], () => 
  makeRequest.get("/users/find/" + userId).then((res)=>{
      return res.data
  })
  );

  console.log(data)
  return (
    <div className='profile'>
   {isLoading ? "loadin" 
   :   <><div className="images">
          <img src={data.coverPic} alt="" className="cover" />
          <img src={data.profilePic} alt="" className="profilePic" />
        </div><div className="profileContainer">
            <div className="uInfo">
              <div className="left">
                <a href="https://facebook.com">
                  <FacebookTwoTone fontSize='large' />
                </a>
                <a href="https://facebook.com">
                  <Instagram fontSize='large' />
                </a>
                <a href="https://facebook.com">
                  <Pinterest fontSize='large' />
                </a>
                <a href="https://facebook.com">
                  <LinkedIn fontSize='large' />
                </a>
                <a href="https://facebook.com">
                  <Twitter fontSize='large' />
                </a>
              </div>
              <div className="center">
                <span>{data.name}</span>
                <div className="info">
                  <div className="item">
                    <Place />
                    <span>{data.city}</span>
                  </div>
                  <div className="item">
                    <Language />
                    <span>{data.website}</span>
                  </div>
                </div>
                {userId === currentUser.id ? (<button>update</button>) : (<button>follow</button>)}
              </div>
              <div className="right">
                <EmailOutlined />
                <MoreVert />
              </div>
            </div>
            <Posts />
          </div></>}
    </div>
  )
}

export default Profile