import { useState, useMemo } from "react";
import TodoOptions from "./TodoOptions";
import TodoList from "./TodoList";
import Pagination from "@/components/common/Pagination";
import usePagination from "@/hooks/usePagination";
import { useTaskStore } from "@/stores/useTaskStore";
import "./TodoApp.scss";

const TodoApp = () => {
  const [status, setStatus] = useState("all");
  const { tasks } = useTaskStore();
  const filteredTasks = useMemo(() => {
    return status === "complete"
      ? tasks.filter((task) => task.status === "complete")
      : status === "incomplete"
      ? tasks.filter((task) => task.status === "incomplete")
      : tasks;
  }, [status, tasks]);

  const { totalPages, currentPage, currentPageData, handlePageChange } =
    usePagination(filteredTasks, 4);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };
  console.log(status);

  return (
    <section className="todo">
      <header className="todo__header">TODO LIST</header>
      <TodoOptions
        className="todo__options"
        status={status}
        onStatusChange={handleStatusChange}
      />
      <TodoList className="todo__list" tasks={currentPageData} />
      {totalPages > 1 && (
        <Pagination
          className="todo__pagination"
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </section>
  );
};

export default TodoApp;
