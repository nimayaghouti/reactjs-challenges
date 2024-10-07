import Button from "@/components/common/Button";
import TodoForm from "./TodoForm";
import Modal from "@/components/common/Modal";
import useModal from "@/hooks/useModal";
import "./TodoOptions.scss";

const TodoOptions = ({ status, onStatusChange }) => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <div className="options">
        <Button type="button" maxWidth="fit-content" onClick={openModal}>
          add task
        </Button>
        <select
          className="options__select"
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
        >
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <TodoForm close={closeModal} />
      </Modal>
    </>
  );
};

export default TodoOptions;
