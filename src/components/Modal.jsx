import React from "react";

function Modal({ show, onClose, title, children }) {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default Modal;
