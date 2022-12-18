import "./App.css";
import Home from "./components/Home";
import Alunos from "./components/Alunos";
import Sobre from "./components/Sobre";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <h1>Hello World!</h1>
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/">Página inicial</Link>
            </li>
            <li>
              <Link to="/alunos">Alunos</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
          </ul>

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
