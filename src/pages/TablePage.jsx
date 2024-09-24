import { useLoaderData } from "react-router-dom";
import instance from "@/services/apiService";
import Table from "../components/view/table/Table";

const TablePage = () => {
  const todos = useLoaderData();
  return <Table data={todos} />;
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
