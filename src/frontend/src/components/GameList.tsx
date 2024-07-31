import { useState } from 'react'
import Game from './Game'
import './game.css'
import './gameList.css'
import Menu from './Menu'
import FormModal from './FormModal'
import SearchBar from './SearchBar'

const GameList = () => {
  const [FormModalOpen, setFormModalOpen] = useState(false)


  return (
    <section id='game-list-section'>
      <Menu email='teste@example.com' url='GameList'/>
      <section id='game-list-column'>
        <SearchBar/>
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
                <Game name='Batman' description='Ation game with parkour' price={350} category='Action' date='08-Dec, 2021'/>
                <Game name='Assassins Creed' description='Ation game with parkour ' price={200} category='Puzzle' date='08-Dec, 2021'/>
                <Game name='GTA V' description='Ation game thieves' price={4000} category='Survival Horror' date='08-Dec, 2021'/>
                <Game name='the crew' description='Ation game with parkour' price={350} category='Action' date='08-Dec, 2021'/>
                <Game name='Batman' description='Ation game with parkour' price={350} category='Action' date='08-Dec, 2021'/>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </section>
  )
}

export default GameList