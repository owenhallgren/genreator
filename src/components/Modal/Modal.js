import React from 'react'
import Popup from 'reactjs-popup'
import './Modal.css'

const Modal = ({addToFavorites}) => { 
  return (
    <Popup
    trigger={<button className="more-button"> More </button>}
    modal
    nested
    >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="content">
          Random generated story for genre   
        </div>
        <div className="actions">
          <button onClick={() => {addToFavorites(); close()}}className='review-button'> 
          Add To Favorite 
          </button>
        </div>
      </div>
    )}
  </Popup>
  );
}

export default Modal
