import React, { useState, FormEvent } from "react";
import { Navigate } from "react-router-dom";
import { doSignWithEmailAndPassword, doSignInWithGoogle } from "../services/auth";
import { useAuth } from "../contexts/authContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import '../styles/login.css'

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSigning, setIsSignin] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const userLoggedIn = useAuth()!;

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setIsSignin(true);
      await createUserWithEmailAndPassword(auth, email, password);
      setIsSignin(false);
    } catch (error) {
      setIsSignin(false);
      setErrorMessage("Failed to sign in, verify your credentials");
    }
  };

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault();
    if (!isSigning) {
      setIsSignin(true);
      try {
        await doSignWithEmailAndPassword(email, password);
      } catch (error) {
        setIsSignin(false);
        setErrorMessage("");
      }
    }
  };

  const onGoogleSignIn = async (e: FormEvent) => {
    e.preventDefault();
    if (!isSigning) {
      setIsSignin(true);
      try {
        await doSignInWithGoogle();
      } catch (error) {
        setIsSignin(false);
        setErrorMessage("");
      }
    }
  };

  return (
    <section id="login-section">
      <div className="signInContainer">
        {userLoggedIn && <Navigate to="/Home" replace={true} />}
        <h1>CRUD OPERATIONS</h1>
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
            className="inputBase"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="text-red-600 font bold">Invalid Email</span>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="inputBase"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="text-red-600 font bold">Invalid Password</span>
          <button type="submit" className="signInButton" onClick={() => window.location.href = "/Home"}>
            Sign In
          </button>
          <a
            className="signUpA"
            onClick={(e) => {
              e.preventDefault();
              setIsSignin(true);
            }}
          >
            Sign Up
          </a>
          <button
            disabled={isSigning}
            onClick={onGoogleSignIn}
            className="googleButton"
          >
            Sign with Google
          </button>
          {errorMessage && <p className="error">{errorMessage}</p>}
        </form>
      </div>
    </section>
  );
};

export default Login;