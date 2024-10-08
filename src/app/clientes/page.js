"use client";

import Link from "next/link";
import Cabecalho from "../components/Cabecalho";
import Table from "react-bootstrap/Table";
import Pagina from "../components/Pagina";

export default function Clientes() {
  return (
      <Pagina titulo="Clientes">
            {/* <Pagina
      style={{
        backgroundColor: "#6c757d",
        padding: "2rem",
        marginBottom: "2rem",
      }}
      styleh1={{ color: "white", textAlign: "center" }}
      titulo="Clientes"
    ></Pagina> */}
      <Cabecalho
        titulo="Clientes"
        subtitulo="Página de clientes usando o cabeçalho"
      />
      <Link href="/">Página Inicial</Link>
      <br />
      <Link href="/fundamentos">Fundamentos</Link>
      <br />
      <Link href="/carros">Página Carros</Link>
      <br />
      <Link href="/array">Página Array</Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>@mdo</td>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      </Pagina>
    
  )
}
