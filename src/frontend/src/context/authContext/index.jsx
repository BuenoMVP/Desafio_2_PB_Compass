import React from "react"
import { useState, useEffect, useContext } from "react"
import { auth } from "../../firebase/firebase"
import { onAuthStateChanged } from "firebase/auth"

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }){
    const [actualUser, setActualUser] = useState(null)
    const [userLoggedIn, setUserLoggedIn] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser)
        return unsubscribe
    },[])

    async function initializeUser(user){
        if(user){
            setActualUser({...user})
            setUserLoggedIn(true)
        } else {
            setActualUser(null)
            setUserLoggedIn(false)
        }
        setLoading(false)
    }

    const value = {
        actualUser,
        userLoggedIn,
        loading
    }

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )

}