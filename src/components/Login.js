import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm,setIsSignInForm] = useState(true);

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div >
        <Header/>
        <div className='absolute'>
        <img className='h-fit w-screen' alt='logo' src='https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_small.jpg' />
    </div>
    <form className= 'w-2/6 absolute my-36 mx-auto right-0 left-0  p-8 bg-black text-white bg-opacity-50'>
        <h1 className='font-semibold text-3xl px-1'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && 
         (<input 
          type='text' 
          placeholder='Full Name' 
          className='bg-gray-700 p-3 m-2 w-full border-0'/>)}
        <input 
          type='text' 
          placeholder='Email Address' 
          className='bg-gray-700 p-3 m-2 w-full '/>
         
        <input
         type='password'
          placeholder='Password'
         className='bg-gray-700 p-3 m-2 w-full'/>
        <button className="p-3 m-2  bg-red-700 w-full">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='m-2 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? SignUp Now" : "Already registered? Sign In now"}</p>
    </form>
    </div>
  )
}

export default Login