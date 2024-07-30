import React, { useState, FormEvent } from 'react'
//import { Navigate, Link } from "react-router-dom"
//import { doSignWithEmailAndPassword, doSignWithGoogle } from "../components/auth"
//import {  }
//import { Navigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [isSigning, setIsSignin] = useState<boolean>(false)

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if(!isSigning){
      setIsSignin(true)
      await doSignInWithEmailAndPassword
    }
  }

  const onGoogleSignIn = (e: FormEvent) => {
    e.preventDefault()
    if(!isSigning){
      setIsSignin(true)
      doSignInWithGoogle().catch(err => {
        setIsSignin(false)
      })
    }
  }

  return (
    <div className="signInContainer">
      {userLoggedIn && (<Navigate to=('Home')  replace={true}/>)}
      <h1>CRUD OPERATIONS</h1>
      <form onSubmit={isSigning ? handleRegister : handleSignIn}>
        <h2>{isSigning ? "Register" : "SIGN IN"}</h2>
        <p>{isSigning ? "Create your account" : "Enter your credentials to acess your account"}</p>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="formLogin"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span>Invalid Emal</span>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="formLogin"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span>Invalid Password</span>
        <button type="submit" className="signInButton">Sign In</button>
        <p className="signUpP">Sign Up</p>
      </form>
    </div>
      );
};

export default Login;