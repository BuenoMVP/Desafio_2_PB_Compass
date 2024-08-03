import { IconBaseProps } from "react-icons"
import "./cardHome.css"
import { Link } from "react-router-dom"

interface CardHomeProps {
  title: string
  total: number
  icon: IconBaseProps
  link: string
}

const CardHome: React.FC<CardHomeProps> = ({ title, total, icon, link }) => {
  return (
    <Link to={link}> 
      <section id="cardHome">
          <div>
              <>
                {icon}
              </>
              <p>{title}</p>
          </div>
          <span>{total}</span>
      </section>
    </Link>
  )
}

export default CardHome