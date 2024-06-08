import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
   let [count,setCount] =useState(0);
   const addValue =()=>{
        if(count < 3){
          count+=1;
       setCount(count);
        }
        else{
          alert("count cannot exceed 3")
        }

   }
   const removeValue = () =>{

    if(count > 0){
      count-=1;
      setCount(count);
    }
    else{
      alert("cannot be less than 0");
    }
   }

  return (
    <>
  <h1>Counter</h1>

      <button onClick={addValue}>add {count}</button>
      <button onClick={removeValue}>remove {count}</button>
      <h3>The value is {count}</h3>
    </>
  )
}

export default App
