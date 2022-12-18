import "./App.css";
import Home from "./components/Home";
import Alunos from "./components/Alunos";
import Sobre from "./components/Sobre";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <div className="container">
        <h1>Hello World!</h1>
        <BrowserRouter>
          <Nav variant="tabs">
            <Nav.Link as={Link} to="/">
              Página Inicial
            </Nav.Link>
            <Nav.Link as={Link} to="/alunos">
              Alunos
            </Nav.Link>
            <Nav.Link as={Link} to="/sobre">
              Sobre
            </Nav.Link>
          </Nav>
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/alunos" element={<Alunos />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
