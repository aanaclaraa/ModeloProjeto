import { Card, CardActionArea, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material'

function Filme(props) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    componet="img"
                    heigth="140"
                    image={props.imagem}
                    alt={props.titulo}
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {props.titulo}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {props.descricao}
                    </Typography>
                    <Grid container >
                        <Grid item>
                            <span>{props.duracao}</span>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
            <Grid container>
                <Grid item sx={6}>
                    <button onClick={props.excluir}>x</button>
                </Grid>

                <Grid item sx={6}>
                    <Link href={"edicao/" + props.id}>Editar</Link>
                </Grid>
            </Grid>
        </Card>
    )
}

export default Filme;