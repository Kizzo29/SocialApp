import Post from "../post/Post"
import "./posts.scss"
import { use} from '@tanstack/react-query'

const Posts = () => {

  return (
    <div className="posts">{posts.map(post => (
     <Post post={post} key={post.id}/>
        ))}</div>
  )
}

export default Posts