import { IconBaseProps } from "react-icons";
import "./cardHome.css"

interface CardHomeProps {
  title: string,
  total: number,
  icon: IconBaseProps
}

const CardHome = (props:CardHomeProps) => {
  return (
    <button>
        <div>
            <>
              {props.icon}
            </>
            <p>{props.title}</p>
        </div>
        <span>{props.total}</span>
    </button>
  )
}

export default CardHome