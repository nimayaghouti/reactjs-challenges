import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (event) => {
    event.stopPropagation();
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  return { isOpen, openModal, closeModal };
};

export default useModal;
