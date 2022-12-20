import React from "react";
import { Button, Form, Table } from "react-bootstrap";

class Alunos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: "",
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

  atualizaNome = (e) => {
    this.setState({
      nome: e.target.value,
    });
  };
  atualizaEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  render() {
    return (
      <>
        <div style={{ margin: "1em 1em" }}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Usuário</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite seu nome de usuário"
                value={this.state.nome}
                onChange={this.atualizaNome}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite seu email"
                onChange={this.atualizaEmail}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Salvar
            </Button>
          </Form>
        </div>
        <div style={{ margin: "1em 1em" }}>
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
        </div>
      </>
    );
  }
}
export default Alunos;
