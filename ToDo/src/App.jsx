import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TODO from './todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TODO />
    </>
  )
}

export default App
