import { formatDate } from "@/utils/dateFormatter";
import DeleteIcon from "@/assets/svg/DeleteIcon";
import EditIcon from "@/assets/svg/EditIcon";
import "./TodoItem.scss";

const TodoItem = ({ task }) => {
  console.log(task.date);
  return (
    <div className="item">
      <input type="checkbox" className="item__checkbox" />
      <div className="item__details">
        <h3 className="item__title">{task.title}</h3>
        <p className="item__date">{formatDate(task.date)}</p>
      </div>
      <div className="item__actions">
        <span className="item__actions_icon">
          <DeleteIcon />
        </span>
        <span className="item__actions_icon">
          <EditIcon />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
