import { useLoaderData } from "react-router-dom";
import instance from "@/services/apiService";
import Table from "../components/view/table/Table";

const TablePage = () => {
  const todos = useLoaderData();
  const formattedTodos = todos.map((todo) => ({
    ...todo,
    completed: todo.completed ? "Completed" : "Incomplete",
  }));
  const columns = [
    { title: "Title", key: "todo" },
    { title: "Status", key: "completed" },
    { title: "User Id", key: "userId" },
  ];
  return <Table data={formattedTodos} itemsPerPage={5} columns={columns} />;
};

const todoLoader = async () => {
  try {
    const response = await instance.get("/todos");
    return response.data.todos;
  } catch (error) {
    console.error(error);
  }
};

// eslint-disable-next-line react-refresh/only-export-components
export { TablePage as default, todoLoader };
