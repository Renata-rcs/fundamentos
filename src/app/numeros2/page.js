'use client'

import Pagina from "@/app/components/Pagina";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Page() {

  const [numero, setNumero] = useState(0);

  function alterarNumero(acao) {
    const novoNumero = acao === 'adc' ? numero + 1 : numero - 1
    setNumero(novoNumero)
  }

  return (
    <Pagina titulo="Números">
      <Button onClick={()=> alterarNumero('sub')}>-</Button>
      <h1>{numero}</h1>
      <Button onClick={()=> alterarNumero('adc')}>+</Button>
    </Pagina>
  )
}

