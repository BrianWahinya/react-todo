import { TasksProvider } from "./context/TasksContext.jsx";
import { Navbar, Tasks } from "./components";
import { AddTask, ClearTasks } from "./features";
import { Col, Container, Row } from "reactstrap";
import { Cursor } from "react-custom-cursors";

import "react-custom-cursors/dist/index.css";
import "./App.css";

function App() {
  return (
    <>
      <Cursor
        animation="beat"
        color="#898989"
        dotColor="#272727"
        hasCursor
        hasDot
        isHollow
        mixBlendMode
        size="sm"
      />
      <Navbar />
      <Container className="main">
        <Row>
          <Col
            className="border main-col"
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
