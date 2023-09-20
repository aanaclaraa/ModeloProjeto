import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React from 'react';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Image } from '@mui/icons-material';


function MenuResponsivo(props) {

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" className='container-principal'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Image sx={{ display: { xs: 'none', md: 'flex' }, mr:1 }}/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Arial',
                            fontWeight: 800,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}>
                            Catálogo
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'block', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                            display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Teste</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md:'flex' } }}>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{my: 3, color: 'white', display: { xs: 'none', md:'flex' } }}>
                        
                        <a href='./cadastro'>Cadastrar</a>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{my: 3, color: 'white', display: { xs: 'none', md:'flex' } }}>
                        
                        <a href='./login'>Login</a>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{my: 3, color: 'white', display: { xs: 'none', md:'flex' } }}>
                        
                        <a href='./cadastro-produto'>Cadastro de produtos </a>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{my: 3, color: 'white', display: { xs: 'none', md:'flex' } }}>
                        
                        <a href='./'>Sair </a>
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default MenuResponsivo;