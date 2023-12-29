import React from 'react'
import { Link,Route,Routes } from 'react-router-dom'
import Login from"./login"

const handleClick = () => {
    
}
const form = () => {
  return (
    <div>
    <Routes>
      <Route path="/Login"element={ <Login/>}/>
      </Routes>

    
        <form className='form'
    action="">
    <p>
      <label htmlFor="login"></label>
      <input type="email" id='login' placeholder='email'/>
    </p>
    <p>
      <label htmlFor="password"></label>
      <input type="password" id='password'placeholder='password' />
    </p>
    <p>
      <button type='email'>login</button>
      <button type='password' className='button' onClick={handleClick}><Link to="/Login">reset</Link></button>
    </p>
   </form>
    </div>

    
  )
}

export default form