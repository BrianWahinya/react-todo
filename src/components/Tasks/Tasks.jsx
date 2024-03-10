import { useState } from "react";
import Task from "../Task/Task";
import { useTasksContext } from "../../context/TasksContext.jsx";

const showTasks = (items) => {
  const allTasks = items.map((item) => {
    return <Task key={item.id} {...item} />;
  });
  return allTasks;
};

const Tasks = () => {
  const { tasks } = useTasksContext();

  return <div>{tasks.length > 0 ? showTasks(tasks) : "Please add a task"}</div>;
};

export default Tasks;
