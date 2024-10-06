import { useForm } from "react-hook-form";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { useTaskStore } from "@/stores/useTaskStore";
import "./TodoForm.scss";

const TodoForm = ({ data = null, close }) => {
  const taskStore = useTaskStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: data?.title || "",
      status: data?.status || "incomplete",
    },
  });

  const onSubmit = (formData) => {
    if (data) {
      const updatedTask = {
        ...data,
        ...formData,
      };
      taskStore.updateTask(updatedTask);
    } else {
      const newTask = {
        ...formData,
        id: Date.now(),
        date: new Date(),
      };
      taskStore.addTask(newTask);
    }
    close();
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="todo-form__title">{data ? "Update" : "Add"} TODO</div>
      <Input
        label="Title"
        id="title"
        placeholder="Enter Task Title"
        className="todo-form__control"
        maxWidth="unset"
        {...register("title", { required: "Task Title is required." })}
        error={errors["title"]}
      />
      <div className="todo-form__control">
        <label htmlFor="status">Status</label>
        <select id="status" {...register("status")}>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      <div className="todo-form__buttons">
        <Button type="submit">{data ? "Update" : "Add"} task</Button>
        <Button variant="secondary" onClick={close}>
          cancel
        </Button>
      </div>
    </form>
  );
};

export default TodoForm;
