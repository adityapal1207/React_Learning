import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards.jsx'
function App() {
  const [count, setCount] = useState(0)
 

  return (
    <>
      <h1  className='bg-green-400 text-red-200 m-4 b-4' >Welcome to my profile</h1>
      <Cards username="Aditya" btn="LinkedIn" link="https://www.linkedin.com/in/adityapal1207/"/>
      <Cards username="Rahul" btn="Leetcode" link="https://leetcode.com/u/adityapal1207/"/>
    
    
    
    </>
  )
}

export default App
