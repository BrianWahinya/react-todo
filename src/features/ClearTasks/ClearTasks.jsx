import { ConfirmPopup, FaIcon } from "../../components";
import { useTasksContext } from "../../context/TasksContext.jsx";

const ClearTasks = () => {
  const { tasks, clearTasks } = useTasksContext();

  return (
    <ConfirmPopup
      button={{
        id: "btnClearTasks",
        btnIcon: <FaIcon type="clear" className="icon-clear" />,
        color: "danger",
        disabled: !tasks.length > 0,
      }}
      title="Clear All?"
      action={clearTasks}
    />
  );
};

export default ClearTasks;
