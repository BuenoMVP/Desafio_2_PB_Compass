import { IconBaseProps } from "react-icons";
import "./cardHome.css";
import { Link } from "react-router-dom";

interface CardHomeProps {
  title: string;
  total: number;
  icon: IconBaseProps;
  link: string;
  color: string;
}

const CardHome = (props: CardHomeProps) => {
  return (
    <Link
      to={props.link}
      id="cardHome"
      style={{ backgroundColor: props.color + "27" }}
    >
      <div>
        <>{props.icon}</>
        <p>{props.title}</p>
      </div>
      <span>{props.total}</span>
    </Link>
  );
};

export default CardHome;
