import { Button, FaIcon } from "../../components";
import { useTasksContext } from "../../context/TasksContext.jsx";

const ClearTasks = () => {
  const { tasks, clearTasks } = useTasksContext();

  return (
    <Button
      name={<FaIcon type="clear" />}
      color="danger"
      onClick={clearTasks}
      disabled={!tasks.length > 0}
    />
  );
};

export default ClearTasks;
