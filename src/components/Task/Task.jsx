import { DeleteTask } from "../Crud";

const Task = ({ id, title, desc, date }) => {
  return (
    <div className="task">
      <p>{id}</p>
      <h3>{title}</h3>
      <p>{desc}</p>
      <p>{date}</p>
      <DeleteTask id={id} />
    </div>
  );
};

export default Task;
