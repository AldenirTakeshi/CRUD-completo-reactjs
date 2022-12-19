import { render } from "@testing-library/react";
import React from "react";
import { Table } from "react-bootstrap";

class Alunos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alunos: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3333/users")
      .then((res) => res.json())
      .then((dados) => {
        this.setState({ alunos: dados });
      });
  }

  componentWillUnmount() {}
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
          {this.state.alunos.map((aluno, indice, key) => (
            <tr>
              <td>{aluno.id}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.email}</td>
              <td>Atualizar Excluir</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
export default Alunos;
