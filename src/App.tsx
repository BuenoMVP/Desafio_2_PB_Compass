import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './frontend/src/pages/Home'
import List from './frontend/src/pages/List'
import Login from './frontend/src/pages/Login'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path='/games' element={<List />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
