import { useState } from "react";
import { shallowObjEqual } from "../../helpers/utils";

const Form = ({ action, initialState }) => {
  const [data, setData] = useState(
    initialState || {
      title: "",
      desc: "",
      bgcolor: "#000000",
      txtcolor: "#000000",
    }
  );

  const reset = () => {
    setData(initialState);
  };

  const submit = (e) => {
    e.preventDefault();
    if (data.title && !shallowObjEqual(initialState, data)) {
      action(data, reset);
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
          value={data.title}
          onChange={(e) => changeValue("title", e)}
        />
        <label htmlFor="task-desc">Enter Description:</label>
        <input
          id="task-desc"
          type="textarea"
          className="input-task"
          value={data.desc}
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
        <input onClick={reset} type="reset" />
      </form>
    </div>
  );
};

export default Form;