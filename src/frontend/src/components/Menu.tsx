import { IoGameControllerOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineHome } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import MenuButton from './MenuButton'
import ImageId from "./ImageId";
import "./menu.css"
import { doSignOut } from "../services/auth";

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
        <div id="image-box">
            <ImageId text={props.email} size="5vw" fontSize="2vw" />
        </div>
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
            <button id="logout-button" className="link" onClick={() => { doSignOut().then(() => window.location.href = '/') }}>
                <p>Logout</p>
                <MdLogout size={tamIcon}/>
            </button>
        </nav>
    </aside>
  )
}

export default Menu