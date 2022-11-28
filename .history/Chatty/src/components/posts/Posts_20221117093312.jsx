import Post from "../post/Post"
import "./posts.scss"
import { useQuery} from '@tanstack/react-query'

const Posts = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
            res.json()
          )
      })

  return (
    <div className="posts">{posts.map(post => (
     <Post post={post} key={post.id}/>
        ))}</div>
  )
}

export default Posts