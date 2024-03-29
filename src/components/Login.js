import React, { useRef, useState } from 'react'
import { checkLoginData } from './validateData';
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const dispatch = useDispatch();

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
              updateProfile(auth.currentUser, {
                  displayName: name.current.value,
                  photoURL: "https://avatars.githubusercontent.com/u/54463538?v=4",
                })
                .then(() => {
                  const {uid, displayName, email, photoURL} = auth.currentUser;
                  dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL : photoURL}));
                })
                .catch((error) => {        
                      const errorCode = error.code;
                      const errorMessage = error.message;
                      setErrorMessage(errorCode + "-" + errorMessage);
                });
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-" + errorMessage);
            });
        }
        else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-" + errorMessage);
            });
          
        }
    }

  return (
    <div className=' md:w-3/12 absolute my-36 right-0 left-0 bg-opacity-80 w-[400px] mx-auto bg-navyblue-500 border-gold border-2 p-5 rounded-lg flex flex-wrap items-center justify-center'>
        
        <form onSubmit={(e) => e.preventDefault()}>
            <h1 className="text-3xl font-bold text-white mb-4 text-left">
                {newUser ? "Sign Up" : "Log In"}
            </h1>
            {newUser && <input ref={name} placeholder='Full Name' type="text" className='w-full max-w-full p-4 my-6 border border-white rounded bg-transparent text-white text-xl focus:outline-none focus:ring focus:ring-gold focus:border-0'/>}
            <input ref={email} placeholder='email address' type="text" className='w-full max-w-full p-4 my-6 border border-white rounded bg-transparent text-white text-xl focus:outline-none focus:ring focus:ring-gold focus:border-0'/>
            <input ref={password} type='password' placeholder='password' className='w-full max-w-full p-4 my-6 border border-white rounded bg-transparent text-white text-xl focus:outline-none focus:ring focus:ring-gold focus:border-0'/>
            {errorMessage && <p className='text-md font-bold text-red-600 text-left '>❌&nbsp;{errorMessage}</p>}
            <button onClick={handleAuthentication} className='w-full max-w-full my-6 text-xl font-bold p-4 border-none rounded bg-gold text-navyblue hover:ring hover:ring-gold hover:bg-navyblue hover:text-gold transition duration-300'>
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