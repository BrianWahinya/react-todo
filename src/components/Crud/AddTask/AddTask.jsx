import { useState } from "react";
import { genRandomId } from "../../../helpers/utils";
import { useTasksContext } from "../../../context/TasksContext";

const AddTask = () => {
  const { addTask } = useTasksContext();
  const [data, setData] = useState({
    title: "",
    desc: "",
    bgcolor: "#000000",
    txtcolor: "#000000",
  });
  const submit = (e) => {
    e.preventDefault();
    if (data.title) {
      addTask({ id: genRandomId(), ...data });
    }
  };

  const changeValue = (id, event) => {
    setData((d) => ({ ...d, [id]: event.target.value }));
  };
  return (
    <div>
      <form>
        <label htmlFor="task-title">Enter Title:</label>
        <input
          id="task-title"
          type="text"
          className="input-task"
          onChange={(e) => changeValue("title", e)}
        />
        <label htmlFor="task-desc">Enter Description:</label>
        <input
          id="task-desc"
          type="textarea"
          className="input-task"
          onChange={(e) => changeValue("desc", e)}
        />
        <label htmlFor="task-bgcolor">Choose Background Color:</label>
        <input
          id="task-bgcolor"
          type="color"
          className="input-task task-color"
          value={data.bgcolor}
          onChange={(e) => changeValue("bgcolor", e)}
        />
        <label htmlFor="task-txtcolor">Choose Text Color:</label>
        <input
          id="task-txtcolor"
          type="color"
          className="input-task task-color"
          value={data.txtcolor}
          onChange={(e) => changeValue("txtcolor", e)}
        />
        <input onClick={submit} type="submit" />
        <input type="reset" />
      </form>
    </div>
  );
};

export default AddTask;
