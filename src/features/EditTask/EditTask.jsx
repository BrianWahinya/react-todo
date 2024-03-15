import { useTasksContext } from "../../context/TasksContext";
import { Form, Modal, FaIcon } from "../../components/";

const EditTask = ({ id, size }) => {
  const { tasks, editTask } = useTasksContext();

  const action = (task) => {
    editTask({ id, ...task });
  };

  return (
    <Modal
      button={{ btnIcon: <FaIcon type="edit" />, color: "warning", size }}
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
