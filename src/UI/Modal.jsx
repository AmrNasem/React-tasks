import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, onClick }) => {
  useEffect(() => {
    window.document.body.classList.add("overflow-hidden");
    return () => window.document.body.classList.remove("overflow-hidden");
  }, []);

  return ReactDOM.createPortal(
    <div
      onClick={onClick}
      className="px-2 position-fixed top-0 left-0 w-100 h-100"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
    >
      {children}
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
