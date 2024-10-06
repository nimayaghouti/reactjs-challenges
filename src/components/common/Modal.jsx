import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import useClickOutside from "@/hooks/useClickOutside";
import CloseIcon from "@/assets/svg/CloseIcon";
import "./Modal.scss";

const Modal = ({ isOpen, closeModal, children }) => {
  const modalRef = useRef(null);
  const [isVisible, setIsVisible] = useState(isOpen);

  useClickOutside(modalRef, closeModal);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setIsVisible(false);
    }
  };

  return createPortal(
    isVisible && (
      <div
        className={`modal ${isOpen ? "modal_open" : ""}`}
        onAnimationEnd={handleAnimationEnd}
      >
        <div ref={modalRef} className="modal__content">
          <span className="modal__close-icon" onClick={closeModal}>
            <CloseIcon />
          </span>
          {children}
        </div>
      </div>
    ),
    document.getElementById("overlay")
  );
};

export default Modal;
