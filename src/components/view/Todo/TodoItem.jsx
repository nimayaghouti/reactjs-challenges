import { formatDate } from "@/utils/dateFormatter";
import DeleteIcon from "@/assets/svg/DeleteIcon";
import EditIcon from "@/assets/svg/EditIcon";
import TodoForm from "./TodoForm";
import Modal from "@/components/common/Modal";
import useModal from "@/hooks/useModal";
import { useTaskStore } from "@/stores/useTaskStore";
import "./TodoItem.scss";

const TodoItem = ({ task }) => {
  const { removeTask, updateTask } = useTaskStore();
  const { isOpen, openModal, closeModal } = useModal();
  console.log(task.date);

  return (
    <>
      <div className="item">
        <input type="checkbox" className="item__checkbox" />
        <div className="item__details">
          <h3 className="item__title">{task.title}</h3>
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
