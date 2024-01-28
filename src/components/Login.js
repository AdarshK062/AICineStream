import React, { useState } from 'react'

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const handleNewUser = () => {
        setNewUser(!newUser);
    }
  return (
    <div className='w-[400px] mx-auto bg-navyblue-500 border-gold border-2 p-5 rounded-lg mt-4 flex flex-wrap items-center justify-center'>
        
        <form>
            <h1 className="text-3xl font-bold text-white mb-4 text-left">
                {newUser ? "Sign Up" : "Log In"}
            </h1>
            {newUser && <input placeholder='Full Name' type="text" className='w-full max-w-full p-4 my-6 border border-white rounded bg-transparent text-white text-xl focus:outline-none focus:ring focus:ring-gold focus:border-0'/>}
            <input placeholder='email address' type="text" className='w-full max-w-full p-4 my-6 border border-white rounded bg-transparent text-white text-xl focus:outline-none focus:ring focus:ring-gold focus:border-0'/>
            <input type='password' placeholder='password' className='w-full max-w-full p-4 my-6 border border-white rounded bg-transparent text-white text-xl focus:outline-none focus:ring focus:ring-gold focus:border-0'/>
            <button className='w-full max-w-full my-6 text-xl font-bold p-4 border-none rounded bg-gold text-001F3F hover:ring hover:ring-gold hover:bg-navyblue hover:text-gold transition duration-300'>
                {newUser ? "Sign Up" : "Log In"}
            </button>
            {newUser && <h1 className="text-xl font-bold text-white mb-4 text-left cursor-pointer" onClick={handleNewUser}>
                already registered?&nbsp;
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