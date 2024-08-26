"use client";

import Pagina from "../components/Pagina";

export default function Objetos() {
  const carros = [
    { marca: "GM", modelo: "Corsa", cor: "Rosa", foto: "" },
    { marca: "GM", modelo: "Celta", cor: "Preto", foto: "" },
    { marca: "Ferrari", modelo: "La Ferrari", cor: "Vermelha", foto: "" },
    { marca: "VM", modelo: "Fusca", cor: "Prata", foto: "" },
    { marca: "GM", modelo: "Cobalt", cor: "Branco", foto: "" },
  ]

  return (
    <Pagina style={{ backgroundColor: "#6c757d",  padding: "2rem", marginBottom: "2rem"}} styleh1={{ color: "white", textAlign: "center"}}titulo="Objetos">
      {carros.map((item) => (
        <p key={item.id}> {item.marca}</p>
      ))}
    </Pagina>
  )
}
