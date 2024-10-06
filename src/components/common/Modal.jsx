import { useRef } from "react";
import { createPortal } from "react-dom";
import useClickOutside from "@/hooks/useClickOutside";
import CloseIcon from "@/assets/svg/CloseIcon";
import "./Modal.scss";

const Modal = ({ isOpen, closeModal, children }) => {
  const modalRef = useRef(null);
  useClickOutside(modalRef, closeModal);

  return createPortal(
    <div className={`modal ${isOpen ? "modal_open" : ""}`}>
      <div ref={modalRef} className="modal__content">
        <span className="modal__close-icon" onClick={closeModal}>
          <CloseIcon />
        </span>
        {children}
      </div>
    </div>,
    document.getElementById("overlay")
  );
};

export default Modal;
