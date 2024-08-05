import { GoPencil } from "react-icons/go";
import { FiTrash } from "react-icons/fi";
import "./game.css";
import { useState } from "react";
import FormModal from "./FormModal";
import DeleteModal from "./DeleteModal";
import ImageId from "./ImageId";
import api from "../services/api";

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

interface GameProps {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  date: string;
  fetchGames: () => void;
}

const Game: React.FC<GameProps> = (props) => {
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  function shortInfo(word: string) {
    if (word.length > 16) {
      return word.slice(0, 16) + "...";
    } else {
      return word;
    }
  }

  const name = shortInfo(props.name);
  const description = shortInfo(props.description);

  const handleDelete = async () => {
    try {
      await api.delete(`/games/${props.id}`);
      props.fetchGames();
      setDeleteModalOpen(false);
    } catch (error) {
      console.error("Erro ao excluir jogo", error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${day}-${month}, ${year}`;
  };

  const formattedDate = formatDate(props.date);

  return (
    <tr>
      <td>
        <ImageId
          text={props.name}
          size="4rem"
          fontSize="1.5rem"
          colorBackground="#E1F2E1"
          radius="10px"
        />
      </td>
      <td>{name}</td>
      <td>{description}</td>
      <td>R$ {props.price}</td>
      <td>{props.category}</td>
      <td>{formattedDate}</td>
      <td>
        <button
          title="btn-edit"
          className="btn-edit"
          onClick={() => setFormModalOpen(true)}
        >
          <GoPencil />
        </button>
        {formModalOpen && (
          <FormModal
            onClose={() => setFormModalOpen(false)}
            fetchGames={props.fetchGames}
            gameData={props}
          />
        )}
      </td>
      <td data-label="Delete">
        <button
          title="btn-trash"
          className="btn-trash"
          onClick={() => setDeleteModalOpen(true)}
        >
          <FiTrash />
        </button>
        {deleteModalOpen && (
          <DeleteModal
            onDelete={handleDelete}
            onClose={() => setDeleteModalOpen(false)}
          />
        )}
      </td>
    </tr>
  );
};

export default Game;
