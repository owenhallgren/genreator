import React from 'react';
import FavoriteCard from '../FavoriteCard/FavoriteCard.js'
import './Favorites.css'
import PropTypes from 'prop-types'

const Favorites = ({state}) => {
  let favoritesToDisplay = state.favoriteGenres.map(genre => {
    return <FavoriteCard genre={genre}/>
  })

  return(
    <>
      {!state.favoriteGenres.length && 
        <div className="no-genres">
          Favorite a genre to display here!
        </div>
      }
      <div className='favorite-card-container'>{favoritesToDisplay}</div>    
    </>
  )
}

Favorites.propTypes = {
  state: PropTypes.any.isRequired
};

export default Favorites;