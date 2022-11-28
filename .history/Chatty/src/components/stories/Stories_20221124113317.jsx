import { useContext } from "react"
import { AuthContext } from "../../context/authContext"
import "./stories.scss"
import nappyPic from "../../assets/pexels-nappy-3.jpg"

const Stories = () => {

    const {currentUser} = useContext(AuthContext)
    //TEMPORARY
    const stories = [
        {
            id: 1,
            name: "Nyengo Phiri",
            img: nappyPic 
        },
        {
            id: 2,
            name: "Nyengo Phiri",
            img: nappyPic 
        },
        {
            id: 3,
            name: "Nyengo Phiri",
            img: nappyPic 
        },
        {
            id: 4,
            name: "Nyengo Phiri",
            img: nappyPic
        },
    ]
  return (
    <div className="stories">
         <div className="story">
                <img src={"/upload/" + currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
        {stories.map(story => (
            <div className="story" key={story.id}>
                <img src={story.img} alt="" />
                <span>{story.name}</span>
            </div>
        ))}
    </div>
  )
}

export default Stories