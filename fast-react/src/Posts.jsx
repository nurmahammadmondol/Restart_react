import { use } from "react"
import Post from "./Post"

export default function Posts({posts}) {
    const post=use(posts)
    
  return (
   <div>
     <h3>Post Items = {post.length}</h3> 

    <div className="postsContainer">
        {
            post.map(po=><Post post={po}></Post>)
        }   
    </div>
   </div>
  )
}
