import { useTasksContext } from "../../../context/TasksContext.jsx";

const ClearTasks = () => {
  const { clearTasks } = useTasksContext();

  return <button onClick={clearTasks}>Clear All</button>;
};

export default ClearTasks;
