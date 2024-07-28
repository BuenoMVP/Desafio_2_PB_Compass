import CardHome from "../components/CardHome"
import { IoGameController } from "react-icons/io5";
import { GoTag } from "react-icons/go"
import "../styles/home.css"

const tamIcon = 100
const totalValue = 150

const Home = () => {
  return (
    <div className="cardContainer">
      <CardHome title="Jogos" total={totalValue} icon={<IoGameController size={tamIcon} color="red"/>} />
      <CardHome title="Genero" total={totalValue} icon={<GoTag size={tamIcon} color="blue"/>} />
    </div>
  )
}

export default Home