import { createContext, useContext, useReducer } from "react";

const TasksContext = createContext();

const tasksReducer = (state, action) => {
  let list;
  switch (action.type) {
    case "addTask":
      list = [...state, action.payload];
      break;
    case "editTask":
      const target = action.payload;
      const target_idx = state.findIndex((item) => item.id === target.id);
      if (target_idx >= 0) {
        state[target_idx] = target;
      }
      list = [...state];
      break;
    case "deleteTask":
      list = state.filter((item) => item.id !== action.payload);
      break;
    case "clearTasks":
      list = [];
      break;
    case "reorderTasks":
      list = [...action.payload];
      break;
    default:
      list = [...state];
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

  const editTask = (task) => {
    dispatch({ type: "editTask", payload: task });
  };

  const deleteTask = (task_id) => {
    dispatch({ type: "deleteTask", payload: task_id });
  };

  const clearTasks = () => {
    dispatch({ type: "clearTasks" });
  };

  const reorderTasks = (tasksReordered) => {
    dispatch({ type: "reorderTasks", payload: tasksReordered });
  };

  return (
    <TasksContext.Provider
      value={{ tasks, addTask, editTask, deleteTask, clearTasks, reorderTasks }}
    >
      {children}
    </TasksContext.Provider>
  );
};

const useTasksContext = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasksContext must be used within a TasksProvider");
  }
  return context;
};

export { TasksProvider, useTasksContext };
