import { Alert, Box, Button, Container, Link, Menu, TextField } from '@mui/material';
import React, { useState } from 'react'
import MenuResponsivo from './MenuResponsivo';

function CadastroProduto() {

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [ano, setAno] = useState("");
    const [duracao, setDuracao] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagem, setImagem] = useState("");
    const [cadastro, setCadastro] = useState(false);
    const [erro, setErro] = useState(false);


    function Cadastrar(evento) {
        evento.preventDefault();
        fetch( process.env.REACT_APP_BACKEND + "filme", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    titulo: titulo,
                    descricao: descricao,
                    ano: ano,
                    duracao: duracao,
                    imagem: imagem,
                    categoria: categoria
                }
            )
        })
            .then((resposta) => resposta.json())
            .then((json) => {

                if (json._id) {
                    setCadastro(true);
                    setErro( false );
                } else {
                    setErro(true);
                    setCadastro( false );
                }
            })
            .catch((erro) => { setErro(true) })

    }


    return (
        <Container component="section" maxWidth="sm">
            <MenuResponsivo />
            <Box sx={{
                mt: 10,
                backgroundColor: "#FFC5EC",
                padding: "25px",
                borderRadius: "5px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <h1>Cadastrar</h1>
                { erro && (<Alert severity="warning">Produto já cadastrado. Tente novamente por favor!</Alert>) }
                { cadastro && ( <Alert severity="success">Obrigado por cadastrar seu produto!</Alert> )}
                <Box component="form" onSubmit={Cadastrar}>
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
                        type="number"
                        label="Ano"
                        variant="filled"
                        margin="normal"
                        value={ano}
                        onChange={(e) => setAno(e.target.value)}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        label="Duração"
                        variant="filled"
                        margin="normal"
                        value={duracao}
                        onChange={(e) => setDuracao(e.target.value)}
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
                    <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, mb: 2 }} >Cadastrar</Button>
                </Box>
            </Box>
        </Container>
    )
}

export default CadastroProduto;