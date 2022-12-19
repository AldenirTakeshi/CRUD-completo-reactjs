import React from "react";
import { Button, Table } from "react-bootstrap";

class Alunos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alunos: [],
    };
  }

  componentDidMount() {
    this.buscarAlunos();
  }

  componentWillUnmount() {}

  buscarAlunos() {
    fetch("http://localhost:3333/users")
      .then((res) => res.json())
      .then((dados) => {
        this.setState({ alunos: dados });
      });
  }

  deletarAluno = (id) => {
    fetch("http://localhost:3333/users/" + id, { method: "DELETE" }).then(
      (res) => {
        if (res.ok) {
          this.buscarAlunos();
        }
      }
    );
  };

  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Opção</th>
          </tr>
        </thead>
        <tbody>
          {this.state.alunos.map((aluno, indice) => (
            <tr>
              <td>{indice + 1}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.email}</td>
              <td>
                <Button variant="success">Success</Button>{" "}
                <Button
                  variant="danger"
                  onClick={() => this.deletarAluno(aluno.id)}
                >
                  Excluir
                </Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
export default Alunos;
