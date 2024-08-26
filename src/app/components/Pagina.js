import { Container, Nav, Navbar } from "react-bootstrap";

export default function Pagina(props) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Navbar.Brand href="#home">Sistema Acadêmico</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/fundamentos">Página 1</Nav.Link>
          <Nav.Link href="/clientes">Página 2</Nav.Link>
          <Nav.Link href="/array">Array</Nav.Link>
          <Nav.Link href="/carros">Carros</Nav.Link>
        </Nav>
      </Navbar>

      <div style={props.style}>
        <h1 style={props.styleh1}>{props.titulo}</h1> {/* Estilo separado para o título */}
      </div>

      <Container>{props.children}</Container>
    </>
  )
}

