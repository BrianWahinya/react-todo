import { Button, FaIcon } from "../../components";
import { useTasksContext } from "../../context/TasksContext";

const DeleteTask = ({ id, size }) => {
  const { deleteTask } = useTasksContext();
  return (
    <Button
      name={<FaIcon type="delete" />}
      color="danger"
      onClick={() => deleteTask(id)}
      size={size}
    />
  );
};

export default DeleteTask;
