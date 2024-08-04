import { IconBaseProps } from "react-icons"
import { Link } from "react-router-dom"
import "./menuButton.css"

interface MenuButtonProps {
    title: string,
    goTo: string,
    state: boolean,
    icon: IconBaseProps
}

const MenuButton = (props:MenuButtonProps) => {
  return (
    <Link to={props.goTo} className="link">
        <>
            {props.icon}
        </>
        <p id="menu-button-text" style={{display: props.state === false ? "" : "flex"}}>{props.title}</p>
    </Link>
  )
}

export default MenuButton