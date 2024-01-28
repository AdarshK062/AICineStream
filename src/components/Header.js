import React from 'react'
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';

const Header = () => {
  const userInfo = useSelector((store) => store.userData);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='flex items-center justify-between'>
        <img src={logo} className="h-32 p-4" alt="logo" />
        {userInfo && <div className='flex'>
          <img src={userInfo.photoURL} className='w-14 border-gold rounded-sm' alt="user-icon"/>
          <button onClick={handleSignOut} className='text-xl mx-6 font-bold p-2 hover:border-none rounded hover:bg-gold hover:text-navyblue ring ring-gold bg-navyblue text-gold transition duration-300'>Signout</button>
        </div>}
    </div>
  )
}

export default Header