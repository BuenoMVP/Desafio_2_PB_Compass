import { GoPencil } from "react-icons/go";
import { FiTrash } from "react-icons/fi";
import './game.css'

const Game = () => {
  return (
    <tr>
        <td>BA</td>
        <td>Batman Arkham</td>
        <td>Action game with parkour</td>
        <td>R$ 350.00</td>
        <td>Detective</td>
        <td>08-Dec, 2021</td>
        <td>
            <button title="btn-edit" className="btn-edit"><GoPencil/></button>
        </td>
        <td data-label="Delete">
            <button title="btn-trash"  className="btn-trash"><FiTrash/></button>
        </td>
    </tr> 
  )
}

export default Game