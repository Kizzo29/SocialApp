import Post from "../post/Post"
import "./posts.scss"

const Posts = () => {
    const posts = [
        {
            id: 1,
            name: "Nyengo Phiri",
            userId: 1,
            profilePic:"",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
            img:""
        },
        {
            id: 2,
            name: "Black Kasema",
            userId: 2,
            profilePic: "",
            desc:"Numquam ipsa sed ad aspernatur sapiente error iure quisquam, commodi laboriosam alias, debitis porro ab nihil eligendi doloribus facilis, labore quae harum!"
             

        },
    ]
  return (
    <div className="posts">{posts.map(post => (
     <Post post={post} key={post.id}/>
        ))}</div>
  )
}

export default Posts