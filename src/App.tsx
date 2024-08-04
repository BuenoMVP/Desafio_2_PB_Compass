import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from './frontend/src/contexts/authContext'
import Home from './frontend/src/pages/Home'
import List from './frontend/src/pages/List'
import Login from './frontend/src/pages/Login'


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/games" element={<List />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
