const Task = ({ id, title, desc, date }) => {
  return (
    <div className="task">
      <h3>{title}</h3>
      <p>{desc}</p>
      <p>{date}</p>
    </div>
  );
};

export default Task;
