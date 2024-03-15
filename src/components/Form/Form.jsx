import { useEffect, useRef, useState } from "react";
import { shallowObjEqual } from "../../helpers/utils";
import {
  Form as ReactForm,
  FormFeedback,
  FormGroup,
  FormText,
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
  const isFirstRender = useRef(true);

  const reset = () => {
    if (data.title.length < 1) {
      setError(false);
    }
    setData(initialState);
  };

  const submit = (e) => {
    e.preventDefault();
    if (data.title.length < 1) {
      setError(true);
    }
    if (data.title.length && !shallowObjEqual(initialState, data)) {
      setError(false);
      action(data, reset);
    }
  };

  const changeValue = (id, event) => {
    setError(false);
    const value = event.target.value;
    if (id === "title" && value.length < 1) {
      setError(true);
    }
    setData((d) => ({ ...d, [id]: value }));
  };

  return (
    <>
      <ReactForm className="todo-form">
        <FormGroup>
          <Label for="task-title">Enter Title: *</Label>
          <Input
            id="task-title"
            type="text"
            className="input-task"
            value={data.title}
            onChange={(e) => changeValue("title", e)}
            valid={!error && data.title.length > 0}
            invalid={error}
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
            btnName="Submit"
            style={{ backgroundColor: "#0077aae8" }}
          />
          <Button
            onClick={reset}
            type="reset"
            btnName="Reset"
            style={{ backgroundColor: "#999999eb" }}
          />
        </FormGroup>
      </ReactForm>
    </>
  );
};

export default Form;
