"use client"

import Pagina from "@/app/components/Pagina"
import apiDisney from "@/services/apiDisney"
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
export default function Page() {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    apiDisney.get("character").then((resultado) => {
      setPersonagens(resultado.data.data)
    })
  }, [])

  return (
    <Pagina titulo="Disney Tabela">
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>foto</th>
          </tr>
        </thead>
        <tbody>
          {personagens.map((item) => (
            <tr  key={item._id}>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>
                <img src={item.imageUrl} height="100" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  )
}
