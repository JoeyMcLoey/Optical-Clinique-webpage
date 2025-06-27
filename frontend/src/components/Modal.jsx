// Modal.jsx
import React from 'react';

const Modal = ({ isOpen, onClose, children, backgroundImage }) => {
  if (!isOpen) return null;

  const backdropStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };

  const modalStyle = {
    background: '#fff',
    width: '90%',
    maxWidth: '1000px',
    height: '600px',
    borderRadius: '12px',
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
  };

  const closeStyle = {
    position: 'absolute',
    top: '10px',
    right: '15px',
    background: 'transparent',
    border: 'none',
    fontSize: '1.8rem',
    cursor: 'pointer',
    color: '#fff',
    zIndex: 2,
  };

  const leftStyle = {
    width: '50%',
    padding: '2rem',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const rightStyle = {
    width: '50%',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'brightness(0.85)',
  };

  return (
    <div style={backdropStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <button style={closeStyle} onClick={onClose}>&times;</button>
        <div style={leftStyle}>
          {children}
        </div>
        <div style={rightStyle}></div>
      </div>
    </div>
  );
};

export default Modal;
