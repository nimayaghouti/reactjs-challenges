import TodoItem from "./TodoItem";
import "./TodoList.scss";

const TodoList = () => {
  return (
    <div className="list">
      <ul className="list__items">
        <TodoItem className="list__item" />
      </ul>
      <p className="list__empty">No Todos</p>
    </div>
  );
};

export default TodoList;
