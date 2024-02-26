import React, { useRef, useState } from 'react'
import Header from './Header'
import validate from '../utils/validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase"

const Login = () => {

  const [isSignInForm,setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null)

  

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm)
  }

  const handleButtonClick = () => {
  const message =   validate(email.current.value,password.current.value)
  setErrorMessage(message)
  if(message) return;

  if(!isSignInForm){
    createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage)
  });
  }else{
    signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage)
  });
  }
    
  }

   
  return (
    <div >
        <Header/>
        <div className='absolute'>
        <img className='h-screen w-screen' alt='logo' src='https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_small.jpg' />
    </div>
    <form onSubmit={(e) => e.preventDefault()} className= 'w-2/6 absolute my-36 mx-auto right-0 left-0  p-8 bg-black text-white bg-opacity-50'>
        <h1 className='font-semibold text-3xl px-1'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && 
         (<input 
          type='text' 
          placeholder='Full Name' 
          className='bg-gray-700 p-3 m-2 w-full border-0'/>)}
        <input 
          ref={email}
          type='text' 
          placeholder='Email Address' 
          className='bg-gray-700 p-3 m-2 w-full '/>
         
        <input
         ref={password} 
         type='password'
          placeholder='Password'
         className='bg-gray-700 p-3 m-2 w-full'/>

        <p className='text-red-500 font-bold text-lg p-2'>{errorMessage}</p>
        <button onClick={handleButtonClick} className="p-3 m-2  bg-red-700 w-full" >{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='m-2 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? SignUp Now" : "Already registered? Sign In now"}</p>
    </form>
    </div>
  )
}

export default Login