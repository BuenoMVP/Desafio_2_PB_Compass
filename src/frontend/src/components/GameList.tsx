import Game from './Game'
import './game.css'
import './gameList.css'

const GameList = () => {
  return (
    
    <div className="container-game-list">
      <div className="tbl-container">
        <div className="tbl-header">
          <h2>Games List</h2>
          <button>ADD NEW GAME</button>
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