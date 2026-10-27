
import { Suspense, useState } from 'react'
import './App.css'
import Users from './Users';
import Posts from './Posts';


// 2. fatch users simpal way 
  const users=fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())

// 3. fatch post function way 
  const postsData=async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()
  }
  const posts=postsData();

function App() {

  // 1. Use react code => useState()
  const [count, setCount]=useState(0);
  const handleClickMe=()=>{
    const number=count + 1;
    setCount(number)
  }

  
  return (
    <>
      <section id="center">
        
       
          <h1>Get started</h1>
          <p>Count = {count}</p>
          <button onClick={handleClickMe}>Click Me</button>

          {/* load Users  */}
          <Suspense fallback={<h3>Loading Users.......1</h3>}>
            <Users data={users}></Users>
          </Suspense>


          {/* load posts  */}
          <Suspense fallback={<h3>Loading Posts.........2</h3>}>
            <Posts posts={posts}></Posts>
          </Suspense>
        
       
      </section>

      

      

      
    </>
  )
}

export default App
