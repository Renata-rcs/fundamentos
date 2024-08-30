import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function Pagina(props) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Navbar.Brand href="#home">Fundamentos</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/fundamentos">Fundamentos</Nav.Link>
          <Nav.Link href="/clientes">Clientes</Nav.Link>
          <Nav.Link href="/array">Array</Nav.Link>
          <Nav.Link href="/objetos">Carros</Nav.Link>
          <Nav.Link href="/nomes">Nomes</Nav.Link>
          <Nav.Link href="/numeros">Números</Nav.Link>
          <NavDropdown title="Disney" id="disney-nav-dropdown">
            <NavDropdown.Item href="/disney">Disney</NavDropdown.Item>
            <NavDropdown.Item href="/disney/cards">
              Disney Cards
            </NavDropdown.Item>
            <NavDropdown.Item href="/disney/carrossel">
              Disney Carrossel
            </NavDropdown.Item>
            <NavDropdown.Item href="/disney/tabela">
              Disney Tabela
            </NavDropdown.Item>
          </NavDropdown>
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
