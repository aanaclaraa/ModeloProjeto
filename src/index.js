import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './Login';
import Cadastro from "./Cadastro";
import CadastroProduto from './components/CadastroProduto';
import EditaFilme from './EditaFilme';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FFFFFF',
      light: '#FFFFFF',
      dark: '#FFFFFF',
      contrastText: '#000',
    },
    secondary: {
      main: '#B2B7FC',
      light: '#ba8aff',
      dark: '#6620c5',
    },
    text: {
      primary: '#000000',
      secondary: '#000000',
      hint: '#000000',
      disabled: '#000000',
    },
    error: {
      main: '#d50000',
      contrastText: '#000000',
    },
    background: {
      default: '#000000',
    },
    warning: {
      main: '#000000',
    },
    info: {
      main: '#000000',
    },
    success: {
      main: '#0ebd3a',
    },
    divider: '#0ebd3a',
  }
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/cadastro",
    element: <Cadastro />
  },
  {
    path: "/cadastro-produto",
    element: <CadastroProduto />
  },
  {
    path: "/edicao/:id",
    element: <EditaFilme />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
