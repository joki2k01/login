import React from 'react'
import { useState } from 'react';

const Login = () => {
  const [count, setCount]=useState(0); 
  function incrementFunction(){
    setCount(count + 1)
  }
  function decrementFunction(){
    setCount(pervcount=>pervcount - 1)
    
  }
  return (
    <div>
        <button  onClick={decrementFunction}>-</button>
        <span>{count}</span>
        <button onClick={incrementFunction}>+</button>
    </div>
  )
}

export default Login