import { Link } from "react-router-dom"

const Login = () => {
  return (
  <>
    <div>Login</div>
    <Link to={'/Home'} >Home</Link>
    <br></br>
    <Link to={'/GamesList'} >GamesList</Link>
  </>
  )
}

export default Login