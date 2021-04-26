import React from 'react';

const FavoriteCard = ({genre}) => {
  return (
    <>
      <div className="favorited-card">
        {genre}
        <button>Delete</button>
      </div>
    </>
  )
}

export default FavoriteCard;