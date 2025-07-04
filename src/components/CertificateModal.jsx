import React from "react";
import "./CertificateModal.css";

const CertificateModal = ({ isOpen, onClose, certSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
    
       < iframe
  src={`https://docs.google.com/gview?url=${window.location.origin + certSrc}&embedded=true`}
  width="100%"
  height="500px"
  frameBorder="0"
/>
      </div>
    </div>
  );
};

export default CertificateModal;
