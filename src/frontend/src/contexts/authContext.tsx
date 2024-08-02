import React,{ useContext, useState, useEffect, Context, ReactElement } from "react"
import { auth } from "../services/firebase"
import { onAuthStateChanged, User } from "firebase/auth"

interface AuthContextType {
    currentUser: User | null;
    userLoggedIn: boolean;
    loading: boolean
}

const AuthContext: Context<AuthContextType | undefined> =React.createContext<AuthContextType | undefined>(undefined)

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined){
        throw new Error("Error with the use of AuthContext, check the code")
    }
    return context
}

interface AuthProviderProps{
    children: ReactElement | ReactElement[]
}

export function AuthProvider({ children }: AuthProviderProps){
    const [currentUser, setCurrentUser] = useState<User | null>(null)
    const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            initializeUser(user);
        });
            return unsubscribe;
        }, []);

        function initializeUser(user: User | null){
        if(user) {
            setCurrentUser({...user})
            setUserLoggedIn(true)
        } else{
            setCurrentUser(null)
            setUserLoggedIn(false)
        }
        setLoading(false)
    }

    const value: AuthContextType = {
        currentUser,
        userLoggedIn,
        loading,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )

}