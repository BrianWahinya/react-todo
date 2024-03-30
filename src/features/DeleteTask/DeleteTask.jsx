import { Button, ConfirmPopup, FaIcon } from "../../components";
import { useTasksContext } from "../../context/TasksContext";

const DeleteTask = ({ id, title, size }) => {
  const { deleteTask } = useTasksContext();
  return (
    <ConfirmPopup
      button={{
        id: `btnClearTasks_${id}`,
        btnIcon: <FaIcon type="delete" className="icon-delete" />,
        color: "danger",
        btnClass: "btn-delete",
        size,
      }}
      title={`Delete this task: ${title}?`}
      action={() => deleteTask(id)}
    />
  );
};

export default DeleteTask;
