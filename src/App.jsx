import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center items-center h-screen 
      '>
        <div className='flex flex-col justify-center items-center'>
        <h1 className=' text-blue-600 font-mono text-7xl '>
          COOKING...
          </h1>
          <img className='h-48 w-48 p-5' src="/logoBingeGoat.png" alt="" />
          </div>
      </div>
    </>
  )
}

export default App
