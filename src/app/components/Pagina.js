import { Container, Nav, Navbar } from "react-bootstrap";

export default function Pagina(props) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Navbar.Brand href="#home">Fundamentos</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/fundamentos">Fundamentos</Nav.Link>
          <Nav.Link href="/clientes">Clientes</Nav.Link>
          <Nav.Link href="/array">Array</Nav.Link>
          <Nav.Link href="/objetos">Objetos</Nav.Link>
          <Nav.Link href="/carros">Carros</Nav.Link>
          <Nav.Link href="/nomes">Nomes</Nav.Link>
          <Nav.Link href="/numeros">Números</Nav.Link>
          <Nav.Link href="/disney">Disney</Nav.Link>

        </Nav>
      </Navbar>
      <div className="bg-secondary text-center text-white p-3">
          <h1>{props.titulo}</h1>
        </div> 


      {/* <div style={props.style}>
        <h1 style={props.styleh1}>{props.titulo}</h1> 
      </div> */}

      <Container>{props.children}</Container>
    </>
  )
}

