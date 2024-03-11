import React, { useState } from 'react';
import '../css/imageModal.css';

function ImageModal ({ imageUrl, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <img src={imageUrl} alt="Image en plein écran" />
        <button className="close-button" onClick={onClose}>
          Fermer
        </button>
      </div>
    </div>
  );
};

export default ImageModal;