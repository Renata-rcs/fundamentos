"use client"

import Pagina from "@/app/components/Pagina"
import apiDisney from "@/services/apiDisney"
import { useEffect, useState } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
export default function Page() {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    apiDisney.get("character").then((resultado) => {
      setPersonagens(resultado.data.data)
    })
  }, [])

  return (
    <Pagina titulo="Disney Cards">
      <Row md={4}>
        {personagens.map((item) => (
          <Col className="my-2" key={item._id}>
            <Card>
              <Card.Img variant="top" height="200" src={item.imageUrl} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Pagina>
  )
}
