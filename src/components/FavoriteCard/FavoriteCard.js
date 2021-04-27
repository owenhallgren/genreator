import React from 'react';
import './FavoriteCard.css'

const FavoriteCard = ({genre}) => {
  return (
    <div className="favorite-card">
      🎺 {genre} 🎸
    </div>
  )
}

export default FavoriteCard;