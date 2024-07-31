import React, { useState, FormEvent } from 'react'
import { Navigate } from "react-router-dom"
import { doSignWithEmailAndPassword, doSignInWithGoogle } from '../services/auth';
import { useAuth } from '../contexts/authContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';
import Home from './Home';


const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [isSigning, setIsSignin] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>("")
  const { userLoggedIn } = useAuth

  const handleRegister = async (e: FormEvent) =>{
    e.preventDefault()
    try {
      setIsSignin(true)
      await createUserWithEmailAndPassword(auth, email, password)
      setIsSignin(false)
    } catch (error) {
      setIsSignin(false)
      setErrorMessage("Failed to sign in, verify your credentials")
    }
  }

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault()
    if(!isSigning){
      setIsSignin(true)
      try {
        await doSignWithEmailAndPassword(email, password)
      } catch (error) {
        setIsSignin(false)
        setErrorMessage("Whoops, something went wrong, try again")
      }
    }
  }

  const onGoogleSignIn = async (e: FormEvent) => {
    e.preventDefault()
    if(!isSigning){
      setIsSignin(true)
      try {
        await doSignInWithGoogle()
      } catch (error) {
        setIsSignin(false)
        setErrorMessage("Something went wrong with your google authentication")
      }
    }
  }

  return (
    <div className="signInContainer">
      {userLoggedIn && (<Navigate to='/Home'  replace={true}/>)}
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
        <button
        disabled={isSigning}
        onClick={ onGoogleSignIn }
        className="googleButton">
        Sign with Google
        </button>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>
    </div>
      );
};

export default Login;