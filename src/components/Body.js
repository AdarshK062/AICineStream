import React, { useEffect } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { addUser, removeUser } from '../utils/userSlice'
import { auth } from '../utils/firebase'

const Body = () => {
  
const dispatch = useDispatch();
useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid, displayName, email, photoURL} = user;
      dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL : photoURL}));
    } else {
      dispatch(removeUser());
    }
  });
}, []);

  return (
      <div className='bg-navyblue w-full h-full p-0 m-0 min-h-screen'>
          <Header/>
          <Outlet/>
      </div>
)};

export default Body;