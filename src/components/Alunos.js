import { render } from "@testing-library/react";
import React from "react";
import { Table } from "react-bootstrap";

class Alunos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alunos: [
        { id: 1, nome: "Luiz Fernando Nunes", email: "luiz@teste.com" },
        { id: 2, nome: "João Lucas", email: "joao@teste.com" },
        { id: 3, nome: "Ana Catarina", email: "ana@teste.com" },
      ],
    };
  }

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
              <td>Atualizar Excluir</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
export default Alunos;
