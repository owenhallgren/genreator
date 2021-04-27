import React from 'react';
import './GenreDisplay.css'
import Modal from '../Modal/Modal'

const GenreDisplay = ({addToFavorites, genre}) => {
  return (
    <div className=".genre-container">
      <div className='card'>
        {genre}
        <Modal addToFavorites={addToFavorites}/>
      </div>
    </div>
  )
}

export default GenreDisplay;