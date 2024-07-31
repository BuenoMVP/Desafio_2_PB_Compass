import { IoGameControllerOutline } from "react-icons/io5";
import { GoTag } from "react-icons/go"
import "../styles/home.css"
import CardHome from "../components/CardHome"
import Menu from "../components/Menu";
import SearchBar from "../components/SearchBar";

const tamIcon = 100
const totalValue = 150

const Home = () => {
  return (
    <section id="home-section">
      <Menu email="test@email.com" url="Home"/>
      <section id="home-section-column">
        <SearchBar/>
        <div className="cardContainer">
          <CardHome title="Jogos" total={totalValue} icon={<IoGameControllerOutline size={tamIcon} color="#74C1ED"/>} />
          <CardHome title="Genero" total={totalValue} icon={<GoTag size={tamIcon} color="#EE95C5"/>} />
        </div>
      </section>
    </section>
  )
}

export default Home