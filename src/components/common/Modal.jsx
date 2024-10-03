import { useRef } from "react";
import { createPortal } from "react-dom";
import useClickOutside from "@/hooks/useClickOutside";
import Button from "./Button";
import "./Modal.scss";

const Modal = ({ isOpen, closeModal, children }) => {
  const modalRef = useRef(null);
  useClickOutside(modalRef, closeModal);

  return createPortal(
    <div className={`modal ${isOpen ? "modal_open" : ""}`}>
      <div ref={modalRef} className="modal__content">
        {children}
        <Button onClick={closeModal}>Close</Button>
      </div>
    </div>,
    document.getElementById("overlay")
  );
};

export default Modal;
