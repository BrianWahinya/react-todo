import { Button } from "../../components";
import { useTasksContext } from "../../context/TasksContext.jsx";

const ClearTasks = () => {
  const { clearTasks } = useTasksContext();

  return <Button name="Clear All" color="danger" onClick={clearTasks} />;
};

export default ClearTasks;
