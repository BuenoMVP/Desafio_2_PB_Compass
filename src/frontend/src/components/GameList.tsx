import { useState } from 'react'
import Game from './Game'
import './game.css'
import './gameList.css'
import FormModal from './FormModal'

const GameList = () => {
  const [FormModalOpen, setFormModalOpen] = useState(false)


  return (
    
    <div className="container-game-list">
      <div className="tbl-container">
        <div className="tbl-header">
          <h2>Games List</h2>
          <button className="add-new-game-btn" onClick={() => setFormModalOpen(true)}>ADD NEW GAME</button>
          {FormModalOpen && <FormModal/>}
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
            <Game/>
            <Game/>
            <Game/>
            <Game/>
            <Game/>
            <Game/>
            <Game/>
            <Game/>
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default GameList