
'use client'

import Pagina from "@/app/components/Pagina";
import { useState } from "react";
import { Button, Pagination } from "react-bootstrap";


export default function Page(){

    const [nome, setNome] = useState('Renata')

    function alterarNome(){
        const novoNome = nome == 'Renata' ? 'Renata Carvalho' : 'Renata'
        setNome(novoNome)
    
}
    return (
        <Pagina titulo={"Nomes: " + nome}>
            <h1>{nome}</h1>
             <Button onClick={alterarNome}>Alterar Nome</Button>
        </Pagina>
    )    
}
