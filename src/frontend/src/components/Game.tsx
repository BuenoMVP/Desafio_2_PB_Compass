import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import './game.css'

const Game = () => {
  return (
    <div className='table-row'>
        <div className='table-cell initials'>RE</div>
        <div className='table-cell name'>Resident Evil</div>
        <div className='table-cell description'>Resident Evil is a survival horror game.</div>
        <div className='table-cell price'>$ 200</div>
        <div className='table-cell category'>Horror</div>
        <div className='table-cell date'>08-Dec, 2021</div>
        <div className='table-cell actions'>
            <FaEdit style={{ cursor: 'pointer', marginRight: '30px', color: '#089B1F' }} />
            <FaTrash style={{ cursor: 'pointer', color: '#089B1F' }} />
        </div>

    </div>
    
  )
}

export default Game