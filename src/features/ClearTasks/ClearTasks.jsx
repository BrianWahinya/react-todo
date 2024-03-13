import { Button, FaIcon } from "../../components";
import { useTasksContext } from "../../context/TasksContext.jsx";

const ClearTasks = () => {
  const { clearTasks } = useTasksContext();

  return (
    <Button
      name={<FaIcon type="clear" />}
      color="danger"
      onClick={clearTasks}
    />
  );
};

export default ClearTasks;
