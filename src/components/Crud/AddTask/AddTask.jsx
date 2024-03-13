import { genRandomId } from "../../../helpers/utils";
import { useTasksContext } from "../../../context/TasksContext";
import Form from "../../Form/Form";
import Modal from "../../Modal/Modal";

const defaultTask = {
  title: "",
  desc: "",
  bgcolor: "#000000",
  txtcolor: "#000000",
};

const AddTask = () => {
  const { addTask } = useTasksContext();

  const action = (task, reset) => {
    addTask({ id: genRandomId(), ...task });
    reset();
  };

  return (
    <Modal
      button={{ btnName: "Add", color: "primary" }}
      body={{
        title: "Add Task",
        form: <Form action={action} initialState={defaultTask} />,
      }}
    />
  );
};

export default AddTask;
