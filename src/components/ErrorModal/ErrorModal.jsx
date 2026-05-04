import React from "react";
import "./ErrorModal.scss";

const ErrorModal = () => {
  return (
    <div className="error-overlay">
      <div className="error-modal">
        <div className="error-icon">⚠</div>
        <div className="error-content">
          <div className="error-title">PATH NOT FOUND</div>
          <div className="error-desc">No valid path exists between start and finish nodes.</div>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
