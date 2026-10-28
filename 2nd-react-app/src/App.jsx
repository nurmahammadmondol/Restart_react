import { Suspense } from 'react'
import './App.css'
import Countrys from './Countrys/Countrys'

const countrys=fetch('./../public/countrys.json')
.then(res=>res.json())

function App() {

  return (
    <>
      <h2 className='text-5xl font-bold text-red-500 text-center'>Hello Would.....</h2>

      <Suspense fallback={<p>loading..........</p>}>
        <Countrys countrys={countrys}></Countrys>
      </Suspense>
     
    </>
  )
}

export default App
