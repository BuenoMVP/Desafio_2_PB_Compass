import { GoPencil } from "react-icons/go";
import { FiTrash } from "react-icons/fi";
import "./game.css"
import { useState } from "react";
import FormModal from "./FormModal";
import DeleteModal from "./DeleteModal";

const Game = () => {
  const [formModalOpen, setFormModalOpen] = useState(false)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  return (
    <tr>
        <td>BA</td>
        <td>Batman Arkham</td>
        <td>Action game with parkour</td>
        <td>R$ 350.00</td>
        <td>Detective</td>
        <td>08-Dec, 2021</td>
        <td>
            <button className="btn-edit" onClick={() => setFormModalOpen(true)}><GoPencil/></button>
            {formModalOpen && <FormModal/>}
        </td>
        <td data-label="Delete">
            <button className="btn-trash" onClick={() => setDeleteModalOpen(true)}><FiTrash/></button>
            {deleteModalOpen && <DeleteModal/>}
        </td>
    </tr> 
  )
}

export default Game