import React, { useEffect } from 'react'
import Header from './Header'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { addUser, removeUser } from '../utils/userSlice'
import { auth } from '../utils/firebase'

const Body = () => {
  
const dispatch = useDispatch();
const navigate = useNavigate();

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid, displayName, email, photoURL} = user;
      dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL : photoURL}));
      navigate("/browse");
    } else {
      dispatch(removeUser());
      navigate("/");
    }
  });
  return () => unsubscribe();
}, []);

  return (
      <div className='bg-navyblue w-screen h-full p-0 m-0 min-h-screen top-0'>
          <Header/>
          <Outlet/>
      </div>
)};

export default Body;