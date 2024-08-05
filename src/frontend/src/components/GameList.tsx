import { useState, useEffect } from "react";
import api from "../services/api";
import Game from "./Game";
import "./game.css";
import "./gameList.css";
import FormModal from "./FormModal";
import SearchBar from "./SearchBar";
import { useAuth } from "../contexts/authContext";

type Category =
  | "Action"
  | "Shooter"
  | "Fighting"
  | "Puzzle"
  | "Survival Horror"
  | "Platform"
  | "Sports"
  | "Metroidvania"
  | "Adventure";

interface Game {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  date: string;
}

const GameList = () => {
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [games, setGames] = useState<Game[]>([]);
  const { currentUser } = useAuth();

  const fetchGames = async () => {
    if (!currentUser) return;
    try {
      const response = await api.get<Game[]>(
        `/games?loginId=${currentUser.uid}`
      );
      setGames(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Erro ao buscar jogos", error);
      setGames([]);
    }
  };

  useEffect(() => {
    fetchGames();
  }, [currentUser]);

  return (
    <section id="game-list-column">
      <SearchBar />
      <div className="container-game-list">
        <div className="tbl-container">
          <div className="tbl-header">
            <h2>Games List</h2>
            <button
              className="add-new-game-btn"
              onClick={() => setFormModalOpen(true)}
            >
              ADD NEW GAME
            </button>
            {formModalOpen && (
              <FormModal
                onClose={() => setFormModalOpen(false)}
                fetchGames={fetchGames}
              />
            )}
          </div>
          <table className="tbl">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Category</th>
                <th>Date of include</th>
                <th colSpan={2}></th>
              </tr>
            </thead>
            <tbody>
              {games.map((game) => (
                <Game
                  key={game._id}
                  id={game._id}
                  name={game.name}
                  description={game.description}
                  price={game.price}
                  category={game.category}
                  date={game.date}
                  fetchGames={fetchGames}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default GameList;
