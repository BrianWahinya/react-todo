import { genRandomId } from "../../helpers/utils";
import { useTasksContext } from "../../context/TasksContext";
import { Modal, Form, FaIcon } from "../../components";

const defaultTask = {
  title: "",
  desc: "",
  bgcolor: "#000000",
  txtcolor: "#FCFCFC",
};

const AddTask = () => {
  const { addTask } = useTasksContext();

  const action = (task, reset) => {
    addTask({ id: genRandomId(), ...task });
    reset();
  };

  return (
    <Modal
      button={{ btnName: <FaIcon type="add" />, color: "primary" }}
      body={{
        title: "Add Task",
        form: <Form action={action} initialState={defaultTask} />,
      }}
    />
  );
};

export default AddTask;
