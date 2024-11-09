// Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ children, isOpen, onClose }) => {
    if (!isOpen) return null; // If modal is not open, render nothing

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
