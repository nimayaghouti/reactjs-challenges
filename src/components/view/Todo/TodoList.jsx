import TodoItem from "./TodoItem";

import "./TodoList.scss";

const TodoList = ({ tasks }) => {
  return (
    <div className="list">
      {tasks.length === 0 ? (
        <p className="list__empty">No Todos</p>
      ) : (
        <ul className="list__items">
          {tasks.map((task) => (
            <TodoItem key={task.id} task={task} className="list__item" />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
