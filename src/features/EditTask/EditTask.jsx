import { useTasksContext } from "../../context/TasksContext";
import { Form, Modal, FaIcon } from "../../components/";

const EditTask = ({ id }) => {
  const { tasks, editTask } = useTasksContext();

  const action = (task) => {
    editTask({ id, ...task });
  };

  return (
    <Modal
      button={{ btnName: <FaIcon type="edit" />, color: "warning" }}
      body={{
        title: "Edit Task",
        form: (
          <Form
            action={action}
            initialState={tasks.find((item) => item.id === id)}
          />
        ),
      }}
    />
  );
};

export default EditTask;
