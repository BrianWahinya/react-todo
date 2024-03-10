const EditTask = () => {
  return (
    <div>
      <label htmlFor="task-title">Enter Title:</label>
      <input id="task-title" type="text" className="input-task" />
      <label htmlFor="task-desc">Enter Description:</label>
      <input id="task-desc" type="textarea" className="input-task" />
      <label htmlFor="task-bgcolor">Choose Background Color:</label>
      <input id="task-bgcolor" type="color" className="input-task task-color" />
      <label htmlFor="task-txtcolor">Choose Text Color:</label>
      <input
        id="task-txtcolor"
        type="color"
        className="input-task task-color"
      />
    </div>
  );
};

export default EditTask;
