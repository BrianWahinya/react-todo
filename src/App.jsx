import { AddTask, ClearTasks, Tasks } from "./components";
import { TasksProvider } from "./context/TasksContext.jsx";

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
