import { useTasksContext } from "../../../context/TasksContext";
import Form from "../../Form/Form";

const EditTask = ({ id }) => {
  const { tasks, editTask } = useTasksContext();

  const action = (task) => {
    editTask({ id, ...task });
  };

  return (
    <div>
      <Form
        action={action}
        initialState={tasks.find((item) => item.id === id)}
      />
    </div>
  );
};

export default EditTask;
