import React, { useState, FormEvent } from "react"
import { Navigate } from "react-router-dom"
import { doSignWithEmailAndPassword, doSignInWithGoogle, doCreateUserWithEmailAndPassword } from "../services/auth";
import { useAuth } from "../contexts/authContext"
import { FirebaseError } from "firebase/app"
import { FaGoogle } from "react-icons/fa"
import '../styles/login.css'

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [isSigning, setIsSigning] = useState<boolean>(false)
  const [emailError, setEmailError] = useState<string>("")
  const [passwordError, setPasswordError] = useState<string>("")
  const [googleError, setGoogleError] = useState<string>("")
  const { userLoggedIn } = useAuth();

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault()
    setIsSigning(true)
    setEmailError("")
    setPasswordError("")
    try {
      await doCreateUserWithEmailAndPassword(email, password)
    } catch (error) {
      setIsSigning(false)
      handleErrors(error as FirebaseError)
    }
  };

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault()
    if (!isSigning) {
      setIsSigning(true)
      setEmailError("")
      setPasswordError("")
      try {
        await doSignWithEmailAndPassword(email, password)
      } catch (error) {
        setIsSigning(false)
        handleErrors(error as FirebaseError)
      }
    }
  };

  const onGoogleSignIn = async (e: FormEvent) => {
    e.preventDefault()
    if (!isSigning) {
      setIsSigning(true)
      setGoogleError("")
      try {
        await doSignInWithGoogle()
      } catch (error) {
        setIsSigning(false)
        handleErrors(error as FirebaseError)
      }
    }
  };

  const handleErrors = (error: FirebaseError) => {

      const errorCode = error.code

      switch (errorCode) {
        case "auth/invalid-email":
          setEmailError("Invalid email format.")
          break
        case "auth/email-already-in-use":
          setEmailError("Email already exists.")
          break
        case "auth/user-disabled":
          setEmailError("User account is disabled.")
          break
        case "auth/user-not-found":
          setEmailError("This email isnt registered.")
          break
        case "auth/weak-password":
          setPasswordError("Password should be at least 6 characters.")
          break
        case "auth/wrong-password":
          setPasswordError("Incorrect password.")
          break
        case "auth/pop-up-closed-by-user":
          setGoogleError("Popup was closed before authentication completed.")
          break
        case "auth/account-exists-with-different-credential":
          setGoogleError("An account already exists with the same e-mail.")
          break
        default:
          setEmailError("Our servers don't know the error, try again")
          setPasswordError("Our servers don't know the error, try again")
          setGoogleError("Our servers don't know the error, try again")
          break
      }
  }

  const signMode = () => {
    setIsSigning(!isSigning)
    setEmail("")
    setPassword("")
    setEmailError("")
    setPasswordError("")
    setGoogleError("")
  }

  return (
    <section id="login-section">
      <div className="signInContainer">
        {userLoggedIn && <Navigate to="/Home" replace={true} />}
        <div className="login-header"><h1>CRUD OPERATIONS</h1></div>
        
        <form id="login-form" onSubmit={isSigning ? handleRegister : handleSignIn}>
          <h2>{isSigning ? "SIGN UP" : "SIGN IN"}</h2>
          <p>
            {isSigning
              ? "Create your account"
              : "Enter your credentials to acess your account"}
          </p>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className={`inputBase ${emailError ? "inputError" : ""}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <span className="errors">{emailError}</span>}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className={`inputBase ${passwordError ? "inputError" : ""}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <span className="errors">{passwordError}</span>}
          <button type="submit" className="signInButton">
            {isSigning ? "SIGN UP" : "SIGN IN"}
          </button>
          <div className="switch">
          <a
            className="signUpA"
            onClick={(e) => {
              e.preventDefault()
              signMode()
            }}
          >
            {isSigning ? "SIGN IN" : "SIGN UP"}
          </a>
          </div>
          <p>OR</p>
          <button
            disabled={isSigning}
            onClick={onGoogleSignIn}
            className="googleButton"
          >
            <FaGoogle className="google-icon"/> <span>SIGN IN WITH GOOGLE</span>
          </button>
          {googleError && <span className="errors">{googleError}</span>}
        </form>
      </div>
    </section>
  );
};

export default Login;