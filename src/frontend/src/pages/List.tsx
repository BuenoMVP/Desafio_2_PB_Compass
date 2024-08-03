import GameList from '../components/GameList'
import Menu from '../components/Menu'
import '../styles/list.css'

const user = "test@gmail.com"

const List = () => {
  return (
    <section id='list-section'>
      <Menu email={user} url='GameList'/>
      <section id="game-list-section">
        <GameList/>
      </section>
    </section>
  )
}

export default List