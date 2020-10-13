import React from 'react'

export default function Card({ character, addToAlive, addToDeceased, status}){

  const handleAliveClick = () => {
    addToAlive(character)
  }

  const handleDeadClick = () => {
    addToDeceased(character)
  }

  return (
    <div className='card'>
      <h3>{character.name}</h3>
      <button onClick={handleAliveClick}>Alive</button>
      <button onClick={handleDeadClick}>Deceased</button>
    </div>
  )
}