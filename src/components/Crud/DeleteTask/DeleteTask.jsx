import { useTasksContext } from "../../../context/TasksContext";

const DeleteTask = ({ id }) => {
  const { deleteTask } = useTasksContext();
  return <button onClick={() => deleteTask(id)}>Del</button>;
};

export default DeleteTask;
