import React, { useRef, useState } from 'react'
import { checkLoginData } from './validateData';
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleNewUser = () => {
        setNewUser(!newUser);
    }

    const handleAuthentication = () => {
        const error =checkLoginData(newUser, name.current, email.current, password.current);
        setErrorMessage(error);
        if(error) return;
        if(newUser){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              const user = userCredential.user;
              console.log(user);
            }).then((user) => {
                updateProfile(auth.currentUser, {
                    userName: name.current.value,
                  }).then(() => {
                    console.log("profile updated");
                    console.log(user);
                  }).catch((error) => {        
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setErrorMessage(errorCode + "-"+ errorMessage);
                  });
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-"+ errorMessage);
            });
        }
        else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log(user);
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-"+ errorMessage);
            });
          
        }
    }

  return (
    <div className='w-[400px] mx-auto bg-navyblue-500 border-gold border-2 p-5 rounded-lg mt-4 flex flex-wrap items-center justify-center'>
        
        <form onSubmit={(e) => e.preventDefault()}>
            <h1 className="text-3xl font-bold text-white mb-4 text-left">
                {newUser ? "Sign Up" : "Log In"}
            </h1>
            {newUser && <input ref={name} placeholder='Full Name' type="text" className='w-full max-w-full p-4 my-6 border border-white rounded bg-transparent text-white text-xl focus:outline-none focus:ring focus:ring-gold focus:border-0'/>}
            <input ref={email} placeholder='email address' type="text" className='w-full max-w-full p-4 my-6 border border-white rounded bg-transparent text-white text-xl focus:outline-none focus:ring focus:ring-gold focus:border-0'/>
            <input ref={password} type='password' placeholder='password' className='w-full max-w-full p-4 my-6 border border-white rounded bg-transparent text-white text-xl focus:outline-none focus:ring focus:ring-gold focus:border-0'/>
            {errorMessage && <p className='text-md font-bold text-red-600 text-left '>❌&nbsp;{errorMessage}</p>}
            <button onClick={handleAuthentication} className='w-full max-w-full my-6 text-xl font-bold p-4 border-none rounded bg-gold text-001F3F hover:ring hover:ring-gold hover:bg-navyblue hover:text-gold transition duration-300'>
                {newUser ? "Sign Up" : "Log In"}
            </button>
            {newUser && <h1 className="text-xl font-bold text-white mb-4 text-left cursor-pointer" onClick={handleNewUser}>
                Already registered?&nbsp;
                <span className='hover:underline'>Log In here.</span>
            </h1>}
            {!newUser && <h1 className="text-xl font-bold text-white mb-4 text-left cursor-pointer" onClick={handleNewUser}>
                New here?&nbsp;
                <span className='hover:underline'>Sign up now.</span>
            </h1>}
        </form>
    </div>
  )
}

export default Login