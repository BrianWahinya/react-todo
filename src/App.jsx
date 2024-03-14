import { TasksProvider } from "./context/TasksContext.jsx";
import { Navbar, Tasks } from "./components";
import { AddTask, ClearTasks } from "./features";
import { Col, Container, Row } from "reactstrap";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Container className="main">
        <Row>
          <Col
            className="bg-light border main-col"
            md={{
              offset: 2,
              size: 9,
            }}
            sm="12"
          >
            <TasksProvider>
              <div className="main-top">
                <AddTask />
                <ClearTasks />
              </div>
              <hr />
              <Tasks />
            </TasksProvider>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
