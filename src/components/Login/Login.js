import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebase.config";
import { getAuth, signInWithPopup, GoogleAuthProvider,getRedirectResult } from "firebase/auth";
import "./Login.css";

initializeApp(firebaseConfig);

const Login = () => {
  const provider = new GoogleAuthProvider();


  const [user, setUser] = useState({
    isSingIn: false,
    name: "",
    photo: "",
    email: "",
  });

// Google singIn Function

  const handleSingIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const singIn = {
          isSingIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(singIn);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Google singOut Function

  const handleSingOut = () => {
    const auth = getAuth();
    getRedirectResult(auth)
    .then(response => {
      const singOut = {
        isSingIn: false,
        name: '',
        email: '',
        phone: ''
      }
      setUser(singOut);
    })
    .catch(error => {
      console.log(error);
    })
  }
  return (
    <div className="container login m-5">
      <h3>This is Login</h3>

{/* Condition Button singIn SingOut */}

      {user.isSingIn ? (
        <button onClick={handleSingOut}>Sing Out</button>
      ) : (
        <button onClick={handleSingIn}>Sing In</button>
      )}

      {user.isSingIn && (
        <div>
          <p>WelCome, {user.name}</p>
          <p>Email: {user.email}</p>
          <img src={user.photo} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
