import { useState } from "react";
import Button from "@/components/common/Button";
import TodoForm from "./TodoForm";
import Modal from "@/components/common/Modal";
import useModal from "@/hooks/useModal";
import "./TodoOptions.scss";

const TodoOptions = () => {
  const [status, setStatus] = useState("all");
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div className="options">
      <Button type="button" maxWidth="fit-content" onClick={openModal}>
        add task
      </Button>
      <select
        className="options__select"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="all">All</option>
        <option value="complete">Complete</option>
        <option value="incomplete">Incomplete</option>
      </select>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <TodoForm close={closeModal} />
      </Modal>
    </div>
  );
};

export default TodoOptions;
