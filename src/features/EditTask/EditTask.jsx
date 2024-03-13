import { useTasksContext } from "../../context/TasksContext";
import Form from "../../components/Form/Form";
import Modal from "../../components/Modal/Modal";

const EditTask = ({ id }) => {
  const { tasks, editTask } = useTasksContext();

  const action = (task) => {
    editTask({ id, ...task });
  };

  return (
    <Modal
      button={{ btnName: "Edit", color: "warning" }}
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
