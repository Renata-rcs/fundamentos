'use client'

import { Alert, Container } from "react-bootstrap";
import Cabecalho from "../components/Cabecalho";
import Link from "next/link";
import Pagina from "../components/Pagina";

export default function Fundamentos() {
  return (
      <Pagina titulo="Nomes">
      <Cabecalho titulo="Fundamentos" />

      <Container>
        <Alert>Atenção! Preste muita atenção.</Alert>
        <Link href="/">Página Inicial</Link>
        <br />
        <Link href="../clientes">Página Clientes</Link>
        <br />
        <Link href="/carros">Página Carros</Link>
        <br />
        <Link href="/array">Página Array</Link>

        <h1>Fundamentos</h1>
        <p>Sucessos</p>
        <Cabecalho titulo="Fundamentos" />
      </Container>
      </Pagina>
  )
}
