import TodoOptions from "./TodoOptions";
import TodoList from "./TodoList";
import "./TodoApp.scss";

const TodoApp = () => {
  return (
    <section className="todo">
      <header className="todo__header">TODO LIST</header>
      <TodoOptions className="todo__options" />
      <TodoList className="todo__list" />
    </section>
  );
};

export default TodoApp;
