import { createContext, useContext, useReducer } from "react";

const TasksContext = createContext();

const tasksReducer = (state, action) => {
  let list;
  switch (action.type) {
    case "addTask":
      list = [...state, action.payload];
      break;
    case "editTask":
      list = [...state, action.payload];
      break;
    case "deleteTask":
      list = state.filter((item) => item.id !== action.payload);
      break;
    case "clearTasks":
      list = [];
      break;
    default:
      list = state;
  }
  localStorage.setItem("tasks", JSON.stringify(list));
  return list;
};

const TasksProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const addTask = (task) => {
    dispatch({ type: "addTask", payload: task });
  };

  const deleteTask = (task_id) => {
    dispatch({ type: "deleteTask", payload: task_id });
  };

  const clearTasks = () => {
    dispatch({ type: "clearTasks" });
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, deleteTask, clearTasks }}>
      {children}
    </TasksContext.Provider>
  );
};

const useTasksContext = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TasksProvider");
  }
  return context;
};

export { TasksProvider, useTasksContext };
