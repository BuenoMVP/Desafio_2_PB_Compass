import { IoGameControllerOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineHome } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import MenuButton from './MenuButton'
import "./menu.css"

const tamIcon = 20

type URL = "Home" | "GameList"

interface MenuProps {
    email: string,
    url: URL
}

const Menu = (props:MenuProps) => {
  return (
    <aside id='sidebar'>
        <header id='title'>
            <span className="greenBox"></span>
            <h1>CRUD OPERATIONS</h1>
        </header>
        <RxHamburgerMenu id="hamburger" size={tamIcon}/>
        <h4>{props.email}</h4>
        <nav className="content">
            <ul className="menu-items">
                <li className="item" style={{backgroundColor: props.url === "Home" ? "#089B1F" : ""}}>
                    <MenuButton title='Home' goTo='/Home' icon={<MdOutlineHome size={tamIcon} />}/>
                </li>
                <li className="item" style={{backgroundColor: props.url === "GameList" ? "#089B1F" : ""}}>
                    <MenuButton title='Games' goTo='/GamesList' icon={<IoGameControllerOutline size={tamIcon} />}/>
                </li>
            </ul>
            <Link id="logout-button" to="/" className="link">
                <p id="menu-button-text">Logout</p>
                <MdLogout size={tamIcon}/>
            </Link>
        </nav>
    </aside>
  )
}

export default Menu