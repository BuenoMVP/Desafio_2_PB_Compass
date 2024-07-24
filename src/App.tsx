import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './frontend/src/pages/Home'
import List from './frontend/src/pages/List'
import Login from './frontend/src/pages/Login'


function App() {
  return (
    <BrowserRouter>
    <h1>CRUD Operations</h1>
    <div>
      <Link to={'/Login'}>Login</Link>
      <br />
      <Link to='/Home'>Home</Link>
      <br />
      <Link to='/GamesList'>GamesList</Link>
    </div>
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path='/GamesList' element={<List />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
