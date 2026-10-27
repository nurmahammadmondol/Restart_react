import './App.css'

export default function Post({post}) {
  return (
    <div className='postCart'>
        <p>Serial : {post.id}</p>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
    </div>
  )
}
