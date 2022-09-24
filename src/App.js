
import { useState } from "react"
import { Container, Navbar, Row, Col } from "react-bootstrap"
import AddUser from "./components/AddUser"
import UsersList from "./components/UserList"
import "./App.css"

function App() {
  const [UserId, setUserId] = useState("")

  
  const getUserIdHandler = (id) => {
    setUserId(id);
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="">Lista de Aniversários</Navbar.Brand>
        </Container>
      </Navbar>

      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddUser id={UserId} setUserId={setUserId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <UsersList getUserId={getUserIdHandler} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App