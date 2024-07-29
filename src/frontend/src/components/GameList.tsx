import Game from './Game'
import './game.css'
import './gameList.css'
import '../styles/gameList.css'
import Menu from './Menu'

const GameList = () => {
  return (
    <section id='game-list-section'>
      <Menu email='teste@example.com' url='GameList'/>
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
    </section>

  )
}

export default GameList