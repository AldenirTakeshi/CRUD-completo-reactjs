import React from "react";
import { Button, Form, Table } from "react-bootstrap";

class Alunos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
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

  carregarDados = (id) => {
    fetch("http://localhost:3333/users/" + id, { method: "GET" })
      .then((res) => res.json())
      .then((aluno) => {
        this.setState({ id: aluno.id, nome: aluno.nome, email: aluno.email });
      });
  };

  cadastraAluno = (aluno) => {
    fetch("http://localhost:3333/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(aluno),
    }).then((res) => {
      if (res.ok) {
        this.buscarAlunos();
      } else {
        alert("Não foi possivel adicionar o aluno!");
      }
    });
  };

  atualizarAluno = (aluno) => {
    fetch("http://localhost:3333/users/" + aluno.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(aluno),
    }).then((res) => {
      if (res.ok) {
        this.buscarAlunos();
      } else {
        alert("Não foi possivel atualizar status do aluno!");
      }
    });
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

  submit = () => {
    if (this.state.id == 0) {
      const aluno = {
        nome: this.state.nome,
        email: this.state.email,
      };
      this.cadastraAluno(aluno);
    } else {
      const aluno = {
        id: this.state.id,
        nome: this.state.nome,
        email: this.state.email,
      };
      this.atualizarAluno(aluno);
    }
  };

  render() {
    return (
      <>
        <div style={{ margin: "1em 1em" }}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>ID:</Form.Label>
              <Form.Control type="text" value={this.state.id} readOnly={true} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Usuário:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite seu nome de usuário"
                value={this.state.nome}
                onChange={this.atualizaNome}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite seu email"
                value={this.state.email}
                onChange={this.atualizaEmail}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={this.submit}>
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
                <tr key={indice}>
                  <td>{indice + 1}</td>
                  <td>{aluno.nome}</td>
                  <td>{aluno.email}</td>
                  <td>
                    <Button
                      variant="success"
                      onClick={() => this.carregarDados(aluno.id)}
                    >
                      Atualizar
                    </Button>{" "}
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
