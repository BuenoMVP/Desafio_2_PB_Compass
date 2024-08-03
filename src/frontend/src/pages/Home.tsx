import { useEffect, useState } from "react"
import { IoGameControllerOutline } from "react-icons/io5"
import { GoTag } from "react-icons/go"
import "../styles/home.css"
import CardHome from "../components/CardHome"
import Menu from "../components/Menu"
import SearchBar from "../components/SearchBar"
import api from "../services/api"

const tamIcon = 100
const total = 100

const Home = () => {
  const [totalGames, setTotalGames] = useState(0)

  const fetchTotalGames = async () => {
    const loginId = "66a2a6ef730d7fe835417ca3"

    try {
      const response = await api.get(`http://localhost:3000/games/count?loginId=${loginId}`)
      setTotalGames(response.data.count)
    } catch (error) {
      console.error('Erro ao buscar contagem de jogos', error)
    }
  };

  useEffect(() => {
    fetchTotalGames()
  }, [])

  return (
    <section id="home-section">
      <Menu email="test@email.com" url="Home"/>
      <section id="home-section-column">
        <SearchBar/>
        <div className="cardContainer">
          <CardHome title="Jogos" total={totalGames} icon={<IoGameControllerOutline size={tamIcon} color="#74C1ED"/>} />
          <CardHome title="Genero" total={total} icon={<GoTag size={tamIcon} color="#EE95C5"/>} />
        </div>
      </section>
    </section>
  );
};

export default Home