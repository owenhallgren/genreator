import React from 'react';
import './FavoriteCard.css'
import PropTypes from 'prop-types'

const FavoriteCard = ({genre}) => {
  return (
    <div className="favorite-card">
      🎺 {genre} 🎸
    </div>
  )
}

FavoriteCard.propTypes = {
  genre: PropTypes.string
};

export default FavoriteCard;