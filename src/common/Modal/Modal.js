import React from 'react';

const Modal = ({ width, height, className, children }) => {
  const contentStyle = {
    position: 'absolute',
    top: '50%',
    width: width || '180px',
    height: height || '100px',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0px 0px 22px rgba(0, 0, 0, 0.4)',
    zIndex: '1001',
    fontSize: '16px',
  };

  const overlayStyle = {
    height: '100vh',
    width: '100%',
    position: 'absolute',
    zIndex: '1000',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  return (
    <div className="overlay" style={overlayStyle}>
      <div className={className} style={contentStyle}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
