import React from 'react'
import Popup from 'reactjs-popup'
import './Modal.css'

const Modal = ({addToFavorites}) => { 
  return (
    <Popup
    trigger={<button className="favorite-button"> Favorite </button>}
    modal
    nested
    >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <p className="content">
          Add Genre to Favorites?   
        </p>
        <div className="actions">
          <button onClick={() => {addToFavorites(); close()}}className='add-favorite-button'> 
          Add To Favorites
          </button>
        </div>
      </div>
    )}
  </Popup>
  );
}

export default Modal
