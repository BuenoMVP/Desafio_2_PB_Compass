import GameList from '../components/GameList'
import Menu from '../components/Menu'
import '../styles/list.css'

const List = () => {
  return (
    <section id='list-section'>
      <Menu email='test@email.com' url='games'/>
      <section id="game-list-section">
        <GameList/>
      </section>
    </section>
  )
}

export default List