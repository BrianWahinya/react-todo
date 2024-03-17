import { Fragment } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  CardTitle,
} from "reactstrap";
import { DeleteTask, EditTask } from "../../features";
import "./task.css";
import { insertBgOpacity } from "../../helpers/utils";

const genDateTime = (id) => {
  const splitId = id.split("_");
  const timestamp = parseInt(splitId[0]);
  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0"); // Month is zero-indexed, so add 1
  const day = `${date.getDate()}`.padStart(2, "0");
  const hours = `${date.getHours()}`.padStart(2, "0");
  const minutes = `${date.getMinutes()}`.padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

const genTextWithBreaks = (txt) => {
  const splitDesc = txt.split("\n");
  return (
    <>
      {splitDesc.map((item, idx) => (
        <Fragment key={idx}>
          {idx > 0 && <br />}
          <span key={idx}>{item}</span>
        </Fragment>
      ))}
    </>
  );
};

const Task = ({ id, title, desc, txtcolor, bgcolor, date }) => {
  return (
    <Card
      className="my-2 task"
      style={{
        backgroundColor: insertBgOpacity(bgcolor) || "#0d6efd80",
        color: txtcolor,
      }}
    >
      <CardHeader>
        <CardTitle tag="h5">{title}</CardTitle>
        <p className="pDate">{genDateTime(id)}</p>
      </CardHeader>
      <CardBody>
        <CardText>
          {desc && desc.length > 0 && genTextWithBreaks(desc)}
        </CardText>
      </CardBody>
      <CardFooter>
        <div className="task-controls">
          <DeleteTask id={id} title={title} size="sm" />
          <EditTask id={id} size="sm" />
        </div>
      </CardFooter>
    </Card>
  );
};

export default Task;
