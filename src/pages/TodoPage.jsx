import Button from "@/components/common/Button";
import Modal from "@/components/common/Modal";
import useModal from "../hooks/useModal";

const TodoPage = () => {
  const { isOpen, openModal, closeModal } = useModal();

  console.log(isOpen);

  return (
    <div>
      <h1>TodoPage</h1>
      <Button onClick={openModal}>Open Modal</Button>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        Hello This is a Test Modal
      </Modal>
    </div>
  );
};

export default TodoPage;
