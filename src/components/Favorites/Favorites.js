import React from 'react';
import FavoriteCard from '../FavoriteCard/FavoriteCard.js'

const Favorites = ({state}) => {
  let favoritesToDisplay = state.favoriteGenres.map(genre => {
    return <FavoriteCard genre={genre}/>
  })
  return(
    <div>{favoritesToDisplay}</div>
  )
}

export default Favorites;