
import { Button } from "react-bootstrap";
import Cabecalho from "./components/Cabecalho";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Button variant="danger">Primary</Button>{' '}

      <Cabecalho titulo="Página inicial" subtitulo="Renata Carvalho" />

      <Link  href="/fundamentos">Página Fundamentos</Link>
      <br />
      <Link  href="/clientes">Página Clientes</Link>
      <br />
      <Link  href="/carros">Página Carros</Link>
      <br />
      <Link  href="/array">Página Array</Link>



    </main>
  )
}
