import { TasksProvider } from "./context/TasksContext.jsx";
import { Tasks } from "./components";
import { AddTask, ClearTasks } from "./features";
import "./App.css";

function App() {
  return (
    <TasksProvider>
      <>
        <ClearTasks />
        <AddTask />
        <Tasks />
      </>
    </TasksProvider>
  );
}

export default App;
