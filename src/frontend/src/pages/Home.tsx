import { useEffect, useState } from "react";
import { IoGameControllerOutline } from "react-icons/io5";
import { GoTag } from "react-icons/go";
import "../styles/home.css";
import CardHome from "../components/CardHome";
import Menu from "../components/Menu";
import SearchBar from "../components/SearchBar";
import api from "../services/api";
import { useAuth } from "../contexts/authContext";

const tamIcon = 50;
const total = 9;

const Home = () => {
  const [totalGames, setTotalGames] = useState(0);
  const { currentUser } = useAuth();

  const fetchTotalGames = async () => {
    if (!currentUser) return;
    console.log("Current User:", currentUser);
    try {
      const response = await api.get(`/games/count?loginId=${currentUser.uid}`);
      setTotalGames(response.data.count);
    } catch (error) {
      console.error("Erro ao buscar contagem de jogos", error);
    }
  };

  useEffect(() => {
    fetchTotalGames();
  }, [currentUser]);

  return (
    <section id="home-section">
      <Menu email={currentUser?.email || "No email"} url="Home" />
      <section id="home-section-column">
        <SearchBar />
        <div className="cardContainer">
          <CardHome
            title="Games"
            total={totalGames}
            icon={<IoGameControllerOutline size={tamIcon} color="#74C1ED" />}
            link="/games"
            color="#74C1ED"
          />
          <CardHome
            title="Genre"
            total={total}
            icon={<GoTag size={tamIcon} color="#EE95C5" />}
            link="/games"
            color="#EE95C5"
          />
        </div>
      </section>
    </section>
  );
};

export default Home;
