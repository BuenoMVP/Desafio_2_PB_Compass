import { GoPencil } from "react-icons/go";
import { FiTrash } from "react-icons/fi";
import "./game.css"
import { useState } from "react";
import FormModal from "./FormModal";
import DeleteModal from "./DeleteModal";

type Category = "Action" | "Shooter" | "Fighting" | "Puzzle" | "Survival Horror" | "Platform" | "Sports" | "Metroid Vania" | "Adventure" 
interface GameProps {
  name: string,
  description: string,
  price: number,
  category: Category,
  date: string
}

const Game = (props:GameProps) => {
  const [formModalOpen, setFormModalOpen] = useState(false)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)

  return (
    <tr>
        <td>BA</td>
        <td>{props.name}</td>
        <td>{props.description}</td>
        <td>R$ {props.price}</td>
        <td>{props.category}</td>
        <td>{props.date}</td>
        <td>
            <button title="btn-edit" className="btn-edit" onClick={() => setFormModalOpen(true)}><GoPencil/></button>
            {formModalOpen && <FormModal/>}
        </td>
        <td data-label="Delete">
            <button title="btn-trash" className="btn-trash" onClick={() => setDeleteModalOpen(true)}><FiTrash/></button>
            {deleteModalOpen && <DeleteModal/>}
        </td>
    </tr> 
  )
}

export default Game