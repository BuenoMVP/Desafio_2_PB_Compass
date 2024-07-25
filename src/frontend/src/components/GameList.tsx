import React from 'react'
import Game from './Game'
import './game.css'

const GameList = () => {
  return (
    
    <div className='table'>
        <div className='table-header'>
            <div className='table-cell-header'></div>
            <div className='table-cell-header'>Name</div>
            <div className='table-cell-header'>Description</div>
            <div className='table-cell-header'>Price</div>
            <div className='table-cell-header'>Category</div>
            <div className='table-cell-header'>Date of include</div>
            <div className='table-cell-header'></div>
        </div>
        <div className='table-body'>
            <Game/>
            <Game/>
            <Game/>
            <Game/>
        </div>
    </div>

  )
}

export default GameList