import { Card, CardBody, CardHeader, CardText, CardTitle } from "reactstrap";
import { DeleteTask, EditTask } from "../../features";
import "./task.css";

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

const Task = ({ id, title, desc, date }) => {
  return (
    <Card
      className="my-2 task"
      color="primary"
      inverse
      style={{
        width: "18rem",
      }}
    >
      <CardHeader>{genDateTime(id)}</CardHeader>
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardText>{desc}</CardText>
        <div className="task-controls">
          <DeleteTask id={id} size="sm" />
          <EditTask id={id} size="sm" />
        </div>
      </CardBody>
    </Card>
  );
};

export default Task;
