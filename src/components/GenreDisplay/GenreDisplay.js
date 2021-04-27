import React from 'react';
import './GenreDisplay.css'
import Modal from '../Modal/Modal'
import PropTypes from 'prop-types'

const GenreDisplay = ({addToFavorites, genre}) => {
  return (
    <div className=".genre-container">
      <div className='card'>
        <p className="genre-text">🎵{genre}🎵</p>
        <Modal addToFavorites={addToFavorites}/>
      </div>
    </div>
  )
}

GenreDisplay.propTypes = {
  addToFavorites: PropTypes.func,
  genre: PropTypes.string
};

export default GenreDisplay;