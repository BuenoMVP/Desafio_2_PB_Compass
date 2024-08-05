import React, { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'

interface ProtectedRoute {
  children: ReactElement
}

const ProtectedRoute: React.FC<ProtectedRoute> = ({ children }) => {
  const { userLoggedIn } = useAuth()

  if (!userLoggedIn) {
    return <Navigate to="/" replace />
  }

  return children
}

export default ProtectedRoute