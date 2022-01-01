import React from 'react';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import './Login.css';



const app = initializeApp(firebaseConfig);

const Login = () => {

    const provider = new GoogleAuthProvider();
    
     const handleSingin = () => {
        const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    const {displayName,email,photoURL} = result.user;

      console.log(displayName,email,photoURL);
  })
   }
    return (
        <div className="container login m-5">
            <h3>This is Login</h3>
            <button onClick={handleSingin}>Sing in</button>
        </div>
    );
};

export default Login;