import { Button, FaIcon } from "../../components";
import { useTasksContext } from "../../context/TasksContext.jsx";

const ClearTasks = () => {
  const { tasks, clearTasks } = useTasksContext();

  return (
    <Button
      btnIcon={<FaIcon type="clear" />}
      btnName="Clear All"
      color="danger"
      onClick={clearTasks}
      disabled={!tasks.length > 0}
    />
  );
};

export default ClearTasks;
