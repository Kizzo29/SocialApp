import Post from "../post/Post"
import "./posts.scss"
import { useQuery} from '@tanstack/react-query'
import { makeRequest } from "../../axios"

const Posts = () => {


    const posts = [{
        id: 1,
        name: "Black Kasema",
        userId: 1,
        profilePic: "",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate illo et blanditiis necessitatibus expedita eius eligendi. Sint reprehenderit, a ipsum veniam inventore quos iste possimus, fugiat blanditiis esse vero earum."
        img: ""
    }]

    const { isLoading, error, data } = useQuery(['posts'], () => { })

    makeRequest.get("/posts").then(res=>{
        return res.data
    })

  return (
    <div className="posts">{data.map(post => (
     <Post post={post} key={post.id}/>
        ))}</div>
  )
}

export default Posts