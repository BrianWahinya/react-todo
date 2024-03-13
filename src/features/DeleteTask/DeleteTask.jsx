import { Button } from "../../components";
import { useTasksContext } from "../../context/TasksContext";

const DeleteTask = ({ id }) => {
  const { deleteTask } = useTasksContext();
  return <Button name="Del" color="danger" onClick={() => deleteTask(id)} />;
};

export default DeleteTask;
