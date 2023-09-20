import { Avatar, Button, Container } from "@mui/material";
import { useEffect, useState } from "react";
import Filme from "./components/Filme";
import Style from "./global.css";
import MenuResponsivo from "./components/MenuResponsivo";
import Cadastro from "./components/CadastroProduto";

function App() {

    const [ filmes, setFilmes ] = useState();
    const [ erro, setErro ] = useState();

    useEffect(() => {

        const usuario = localStorage.getItem( "usuario" );

        fetch( process.env.REACT_APP_BACKEND + "produtos/" + usuario , {
            headers: {
                'Content-Type': 'application/json'
            }
        } )
        .then( (resposta) => resposta.json() )
        .then( ( json ) => setFilmes( json ) )
        .catch( ( erro ) => { setErro( true ) } )
    }, [])

    function Excluir( evento, id ) {
        evento.preventDefault();
        fetch( process.env.REACT_APP_BACKEND + "produtos" , {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: id
            })
        } )
        .then( ( resposta ) => resposta.json() )
        .then( ( json ) => {
            const novaLista = filmes.filter( (filme ) => filme._id !== id );
            setFilmes( novaLista );
        })
        .catch( ( error ) => setErro( true ) )
    }

    return (
        <>
            <MenuResponsivo className='container-principal'/>
            <Container sx={{ 
                display: "flex" ,
                flexFlow: "row",
                flexWrap: "wrap",
                gap: "2rem"
            }}>
            { filmes && (
                filmes.map( (filmes, index ) => ( 
                    <Filme
                        imagem={filmes.imagem}
                        titulo={filmes.titulo}
                        descricao={filmes.descricao}
                        categoria={filmes.categoria}
                        excluir={ (e) => Excluir( e, filmes._id ) }
                        id={filmes._id}
                    />
                ) )
            ) }
            </Container>
        </>
    );
}

export default App;
