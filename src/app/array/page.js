'use client'

import Pagina from "../components/Pagina"

export default function Array() {

    const carros = ['Corsa', 'Celta', 'Ferrari', 'Fusca', 'Cobalt']


    return (

        <Pagina style={{ backgroundColor: "#6c757d", padding: "2rem", marginBottom: "2rem"}} styleh1={{ color: "white", textAlign: "center"}} titulo="Página de Array">

            {carros.map(item => (
                <p>{item}</p>
            ))}

            <ul>
                {carros.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
        </Pagina>


    )
}

