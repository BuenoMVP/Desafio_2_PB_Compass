import { IoGameControllerOutline } from "react-icons/io5"
import { RxHamburgerMenu } from "react-icons/rx"
import { MdOutlineHome } from "react-icons/md"
import { MdLogout } from "react-icons/md"
import MenuButton from './MenuButton'
import ImageId from "./ImageId"
import "./menu.css"
import { doSignOut } from "../services/auth"
import { useState } from "react"

const tamIcon = 20

type URL = "Home" | "games"

interface MenuProps {
  email: string
  url: URL
}

const Menu = (props: MenuProps) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <aside id='sidebar' style={{ width: openMenu ? "14rem" : "" }}>
      <header id='title'>
        <span className="greenBox"></span>
        <h1>CRUD OPERATIONS</h1>
      </header>
      <RxHamburgerMenu id="hamburger" size={tamIcon} onClick={() => setOpenMenu(!openMenu)} />
      <div id="image-box" style={{ display: openMenu ? "flex" : "" }}>
        <ImageId text={props.email} size="10vh" fontSize="4vh" />
      </div>
      <h4 style={{ display: openMenu ? "flex" : "" }}>{props.email}</h4>
      <nav className="content">
        <ul className="menu-items">
          <li className="item" style={{ backgroundColor: props.url === "Home" ? "#089B1F" : "" }}>
            <MenuButton title='Home' goTo='/Home' icon={<MdOutlineHome size={tamIcon} />} state={openMenu} />
          </li>
          <li className="item" style={{ backgroundColor: props.url === "games" ? "#089B1F" : "" }}>
            <MenuButton title='Games' goTo='/games' icon={<IoGameControllerOutline size={tamIcon} />} state={openMenu} />
          </li>
        </ul>
        <button id="logout-button" className="link" onClick={() => { doSignOut().then(() => window.location.href = '/') }}>
          <p style={{ display: openMenu ? "flex" : "" }}>Logout</p>
          <MdLogout size={tamIcon} />
        </button>
      </nav>
    </aside>
  )
}

export default Menu