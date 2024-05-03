import { useEffect, useRef, useState } from "react";
import { shallowObjEqual } from "../../helpers/utils";
import {
  Form as ReactForm,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import Button from "../Button/Button";
import "./form.css";

const Form = ({ action, initialState }) => {
  const [data, setData] = useState(
    initialState || {
      title: "",
      desc: "",
      bgcolor: "#000000",
      txtcolor: "#FCFCFC",
    }
  );
  const [error, setError] = useState(false);

  const reset = () => {
    if (data.title.length < 1) {
      setError(false);
    }
    setData(initialState);
  };

  const submit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (data.title.length < 1) {
      setError(true);
    }
    if (data.title.length && !shallowObjEqual(initialState, data)) {
      setError(false);
      action(data, reset);
    }
  };

  const changeValue = (id, event) => {
    event.preventDefault();
    event.stopPropagation();
    setError(false);
    const value = event.target.value;
    if (id === "title" && value.length < 1) {
      setError(true);
    }
    setData((d) => ({ ...d, [id]: value }));
  };

  return (
    <>
      <div className="form-card">
        <form className="form">
          <div className="categoryA">
            {error && <p className="pError">Title is required</p>}
            <div className="group">
              <input
                placeholder=""
                type="text"
                required
                value={data.title}
                onChange={(e) => changeValue("title", e)}
              />
              <label htmlFor="name">Title</label>
            </div>
            <div className="group">
              <textarea
                placeholder=""
                id="task-desc"
                name="desc"
                rows="6"
                value={data.desc}
                onChange={(e) => changeValue("desc", e)}
              />
              <label htmlFor="task-desc">Description</label>
            </div>
          </div>
          <div className="categoryB">
            <div className="group">
              <input
                placeholder=""
                type="color"
                id="task-bgcolor"
                name="bgcolor"
                className="input-color"
                value={data.bgcolor}
                onChange={(e) => changeValue("bgcolor", e)}
              />
              <label htmlFor="task-bgcolor">Background Color</label>
            </div>

            <div className="group">
              <input
                placeholder=""
                type="color"
                id="task-txtcolor"
                name="txtcolor"
                className="input-color"
                value={data.txtcolor}
                onChange={(e) => changeValue("txtcolor", e)}
              />
              <label htmlFor="task-txtcolor">Text Color</label>
            </div>
          </div>

          <div className="categoryB">
            <button type="submit" className="btnSave" onClick={submit}>
              Save
            </button>
            <button type="reset" className="btnReset" onClick={reset}>
              Reset
            </button>
          </div>
        </form>
      </div>
      {/* <ReactForm className="todo-form">
        <FormGroup autoComplete="off">
          <Label for="task-title">Enter Title: *</Label>
          <Input
            id="task-title"
            type="text"
            className="input-task"
            value={data.title}
            onChange={(e) => changeValue("title", e)}
            valid={!error && data.title.length > 0}
            invalid={error}
            autoComplete="off"
            autoFill="off"
          />
          {error && (
            <FormFeedback invalid={error}>Title is required</FormFeedback>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="task-desc">Enter Description:</Label>
          <Input
            id="task-desc"
            type="textarea"
            className="input-task"
            value={data.desc}
            onChange={(e) => changeValue("desc", e)}
            rows="6"
          />
        </FormGroup>
        <FormGroup>
          <Label for="task-bgcolor">Choose Background Color:</Label>
          <Input
            id="task-bgcolor"
            type="color"
            className="input-task task-color"
            value={data.bgcolor}
            onChange={(e) => changeValue("bgcolor", e)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="task-txtcolor">Choose Text Color:</Label>
          <Input
            id="task-txtcolor"
            type="color"
            className="input-task task-color"
            value={data.txtcolor}
            onChange={(e) => changeValue("txtcolor", e)}
          />
        </FormGroup>
        <FormGroup className="form-controls">
          <Button
            onClick={submit}
            type="submit"
            btnName="Save"
            style={{ backgroundColor: "#0077aae8" }}
          />
          <Button
            onClick={reset}
            type="reset"
            btnName="Reset"
            style={{ backgroundColor: "#999999eb" }}
          />
        </FormGroup>
      </ReactForm> */}
    </>
  );
};

export default Form;
