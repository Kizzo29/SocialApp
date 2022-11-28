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
import { useQuery, useQueryClient, useMutation} from '@tanstack/react-query'
import { makeRequest } from "../../axios"
import { useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import Update from "../../components/update/Update"
import { useState } from 'react'


const Profile = () => {
  const [openUpdate, setOpenUpdate] = useState(false);

  const {currentUser} = useContext(AuthContext);
  const userId = parseInt(useLocation().pathname.split("/")[2])

  const { isLoading, error, data } = useQuery(['user'], () => 
  makeRequest.get("/users/find/" + userId).then((res)=>{
      return res.data
  })
  );

  const {isLoading: rIsLoading, data: relationshipData } = useQuery(['relationship'], () => 
  makeRequest.get("/relationships?followedId=" + userId).then((res)=>{
      return res.data
  })
  );
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (following) => {
    if (following) return makeRequest.delete("/relationships?userId="+ userId);
    return makeRequest.post("/relationships", {userId})
  },
    {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["relationship"])
    },
  });

  const handleFollow = () => {
   mutation.mutate(relationshipData.includes(currentUser.id))
  }

  return (
    <div className='profile'>
   {isLoading ? "loading" 
   :   <>
   <div className="images">
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
                { rIsLoading 
                ? "loading"
                 : userId === currentUser.id
                  ? (<button onClick={()=>}>update</button>)
                  : (<button onClick={handleFollow}>{relationshipData.includes(currentUser.id) ? "Following" : "Follow"}</button>)}
              </div>
              <div className="right">
                <EmailOutlined />
                <MoreVert />
              </div>
            </div>
            <Posts userId={userId}/>
          </div>
          </>
          }
          {openUpdate && <Update setOpenUpdate={setOpenUpdate}/>}
    </div>
  )
}

export default Profile