import { useState, useEffect } from 'react';
import api from '../services/api';
import './FormModal.css';
import { useAuth } from '../contexts/authContext';

interface FormModalProps {
  onClose: () => void;
  fetchGames: () => void;
  gameData?: {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    date: string;
  };
}

const FormModal: React.FC<FormModalProps> = ({ onClose, fetchGames, gameData }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('Action')
  const [date, /* setDate */] = useState('')
  const { currentUser } = useAuth()

  useEffect(() => {
    if (gameData) {
      setName(gameData.name)
      setDescription(gameData.description)
      setPrice(gameData.price.toString())
      setCategory(gameData.category)
      /* setDate(gameData.date) */
    }
  }, [gameData])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!currentUser) {
      console.error('No user is logged in.')
      return
    }

    const loginId = currentUser.uid; 
    const game = { name, description, price: Number(price), category, date, loginId }

    try {
      if (gameData) {
        await api.put(`/games/${gameData.id}`, game)
      } else {
        await api.post('/games', game)
      }
      fetchGames()
      onClose()
    } catch (error) {
      console.error('Erro ao salvar jogo', error)
    }
  }

  return (
    <div className="form-modal-container">
      <div className="form-modal">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="Action">Action</option>
              <option value="Shooter">Shooter</option>
              <option value="Fighting">Fighting</option>
              <option value="Puzzle">Puzzle</option>
              <option value="Survival Horror">Survival Horror</option>
              <option value="Platform">Platform</option>
              <option value="Sports">Sports</option>
              <option value="Metroidvania">Metroidvania</option>
              <option value="Adventure">Adventure</option>
            </select>
          </div>
          <button type="submit" className="form-submit-btn">Submit</button>
          <button type="button" className="form-cancel-btn" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  )
}

export default FormModal
