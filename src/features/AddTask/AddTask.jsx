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
    console.log(task);
    addTask({ id: genRandomId(), ...task });
    reset();
  };

  return (
    <Modal
      button={{
        btnIcon: <FaIcon type="add" className="icon-add" />,
        btnName: "Add",
        color: "primary",
      }}
      body={{
        title: "Add Task",
        form: <Form action={action} initialState={defaultTask} />,
      }}
    />
  );
};

export default AddTask;
