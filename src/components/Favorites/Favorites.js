import React from 'react';
import FavoriteCard from '../FavoriteCard/FavoriteCard.js'

const Favorites = ({state}) => {
  let favoritesToDisplay = state.favoriteGenres.map(genre => {
    return <FavoriteCard genre={genre}/>
  })
  return(
    <>
    {!state.favoriteGenres.length && 
    <div>
      Favorite a genre to display here!
    </div>}
    { 
      <div>{favoritesToDisplay}</div>
    }
    
    </>
  )
}

export default Favorites;