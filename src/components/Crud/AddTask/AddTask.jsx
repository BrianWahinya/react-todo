import { genRandomId } from "../../../helpers/utils";
import { useTasksContext } from "../../../context/TasksContext";
import Form from "../../Form/Form";

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
    <div>
      <Form action={action} initialState={defaultTask} />
    </div>
  );
};

export default AddTask;
