import GameList from "../components/GameList";
import Menu from "../components/Menu";
import "../styles/list.css";
import { useAuth } from "../contexts/authContext";

const List = () => {
  const { currentUser } = useAuth();
  const userEmail = currentUser?.email || "default@default.com";

  return (
    <section id="list-section">
      <Menu email={userEmail} url="games" />
      <section id="game-list-section">
        <GameList />
      </section>
    </section>
  );
};

export default List;
