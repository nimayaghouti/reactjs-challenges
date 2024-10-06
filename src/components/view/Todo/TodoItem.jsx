import TodoForm from "./TodoForm";
import Modal from "@/components/common/Modal";
import Input from "@/components/common/Input";
import DeleteIcon from "@/assets/svg/DeleteIcon";
import EditIcon from "@/assets/svg/EditIcon";
import useModal from "@/hooks/useModal";
import { useTaskStore } from "@/stores/useTaskStore";
import { formatDate } from "@/utils/dateFormatter";
import "./TodoItem.scss";

const TodoItem = ({ task }) => {
  const { removeTask, updateTask } = useTaskStore();
  const { isOpen, openModal, closeModal } = useModal();

  const handleUpdateTask = (event) => {
    const updatedTask = {
      ...task,
      status: event.target.checked ? "complete" : "incomplete",
    };

    updateTask(updatedTask);
  };

  return (
    <>
      <div className="item">
        <Input
          type="checkbox"
          className="item__checkbox"
          checked={task.status === "complete"}
          onChange={handleUpdateTask}
        />
        <div className="item__details">
          <h3
            className={`item__title ${
              task.status === "complete" ? "item__title_complete" : ""
            }`}
          >
            {task.title}
          </h3>
          <p className="item__date">{formatDate(task.date)}</p>
        </div>
        <div className="item__actions">
          <span
            className="item__actions_icon"
            onClick={() => removeTask(task.id)}
          >
            <DeleteIcon />
          </span>
          <span className="item__actions_icon" onClick={openModal}>
            <EditIcon />
          </span>
        </div>
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <TodoForm close={closeModal} data={task} />
      </Modal>
    </>
  );
};

export default TodoItem;
