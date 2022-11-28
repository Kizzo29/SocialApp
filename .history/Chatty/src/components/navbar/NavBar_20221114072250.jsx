import './navbar.scss'
import { HomeOutlined } from '@mui/icons-material'
import { DarkModeOutlined } from '@mui/icons-material'
import { GridViewOutlined } from '@mui/icons-material'
import { WbSunnyOutlined } from '@mui/icons-material'
import { NotificationsOutlined } from '@mui/icons-material'
import { EmailOutlined } from '@mui/icons-material'
import { PersonOutlined } from '@mui/icons-material'
import { SearchOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../context/darkModeContext'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'

const NavBar = () => {

  const {toggle, darkMode} = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext);

  return (
    <div className='navbar'>
       <div className='left'>
        <Link to='/' style={{textDecoration: "none"}}>
        <span>ChattySocial.</span>
        </Link>
        <HomeOutlined/>
       {darkMode ? <WbSunnyOutlined onClick={toggle}/> : <DarkModeOutlined onClick={toggle}/>}
        <GridViewOutlined/>

        <div className="search">
          <SearchOutlined/>
          <input type="text" placeholder='Search...'/>
        </div>
       </div>
       
       <div className="right">
        <PersonOutlined/>
        <EmailOutlined/>
        <NotificationsOutlined/>
        <div className="user">
          <img src="" alt="" />
          <span>Black Kasema</span>

        </div>


       </div>
    </div>
  )
}

export default NavBar