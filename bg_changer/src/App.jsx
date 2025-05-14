import { useState } from 'react'
import './App.css'

function App() {
  const[color, setColor] = useState("olive")
  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}
    >
      <div className='fixed bottom-12 left-1/2 transform -translate-x-1/2 px-2'>
      <div className='flex flex-wrap justify-center gap-4 bg-white shadow-lg rounded-2xl px-2 py-2'>
        <button 
      className='px-4 py-1 rounded-2xl'
      style={{backgroundColor: "red"}}
      onClick={() => setColor("red")}
      >Red</button>
      <button 
      className='px-4 py-1 rounded-2xl'
      style={{backgroundColor: "green"}}
      onClick={() => setColor("green")}
      >Green</button>
      <button 
      className='px-4 py-1 rounded-2xl'
      style={{backgroundColor: "yellow"}}
      onClick={() => setColor("yellow")}
      >Yellow</button>
      <button 
      className='px-4 py-1 rounded-2xl text-white'
      style={{backgroundColor: "black"}}
      onClick={() => setColor("black")}
      >Black</button>
      <button 
      className='px-4 py-1 rounded-2xl'
      style={{backgroundColor: "orange"}}
      onClick={() => setColor("orange")}
      >Orange</button>
      <button 
      className='px-4 py-1 rounded-2xl'
      style={{backgroundColor: "#6a5acd"}}
      onClick={() => setColor("#6a5acd")}
      >Purple</button>
      <button 
      className='px-4 py-1 rounded-2xl'
      style={{backgroundColor: "cyan"}}
      onClick={() => setColor("cyan")}
      >Cyan</button>
      <button 
      className='px-4 py-1 rounded-2xl'
      style={{backgroundColor: "pink"}}
      onClick={() => setColor("pink")}
      >Pink</button>
      </div>
      </div>
    </div>
  )
}

export default App
