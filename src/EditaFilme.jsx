import { Box, Container, TextField, Button, Alert } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuResponsivo from "./components/MenuResponsivo";

function EditaFilme() {

    const { id } = useParams();
    const [titulo, setTitulo] = useState("");
    const [ descricao, setDescricao ] = useState("")
    const [categoria, setCategoria] = useState("");
    const [duracao, setDuracao] = useState("");
    const [ano, setAno] = useState("");
    const [imagem, setImagem] = useState("");
    const [editar, setEditar] = useState(false);
    const [erro, setErro] = useState(false);

    useEffect( () => {
        const usuario = localStorage.getItem( "usuario" );
        fetch( process.env.REACT_APP_BACKEND + "produtos/" + usuario + "/" + id, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resposta) => resposta.json())
        .then((json) => {
            if( !json.status ) {
                setTitulo( json.titulo );
                setDescricao( json.descricao);
                setImagem( json.imagem );
                setCategoria( json.categoria );
            } else {
                setErro( "Joia não encontrada" );
            }
        })
        .catch((erro) => { setErro(true) })
    }, [] );

    function Editar( evento ) {
        evento.preventDefault();

        fetch( process.env.REACT_APP_BACKEND + "produtos", {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    id: id,
                    titulo: titulo,
                    descricao: descricao,
                    ano:ano,
                    duracao: duracao,
                    categoria: categoria,
                    imagem: imagem,
                    descricao: descricao,
                    usuario: localStorage.getItem( "usuario" )
                }
            )
        })
        .then((resposta) => resposta.json())
        .then((json) => {

            if (json._id) {
                setEditar(true);
                setErro( false );
            } else {
                setErro(true);
                setEditar( "Não foi possível editar" );
            }
        })
        .catch((erro) => { setErro( "Erro ao processar a requisição") })
    }




    return (
        <Container component="section" maxWidth="sm">
            <MenuResponsivo />
            <Box sx={{
                mt: 10,
                backgroundColor: "#FFC5EC",
                padding: "30px",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                { erro && ( <Alert severity="warning">{erro}</Alert>)}
                { editar && ( <Alert severity="success">Produto editado com sucesso!</Alert>)}
                <Box component="form" onSubmit={Editar}>
                    <TextField
                        type="text"
                        label="Título"
                        variant="filled"
                        margin="normal"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        label="Descrição"
                        variant="filled"
                        margin="normal"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        label="Categoria"
                        variant="filled"
                        margin="normal"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        label="Url da Imagem"
                        variant="filled"
                        margin="normal"
                        value={imagem}
                        onChange={(e) => setImagem(e.target.value)}
                        fullWidth
                        required
                    />
                        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, mb: 2 }} >Editar</Button>
                </Box>

            </Box>
        </Container>
    )
}

export default EditaFilme;