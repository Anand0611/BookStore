import { useState } from 'react'
import './App.css'
import { Landingpg } from './pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Landingpg/>
      <div className=' bg-indigo-950 w-full h-screen'>
        
      </div>
      </div>
  )
}

export default App
