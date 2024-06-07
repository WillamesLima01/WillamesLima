// Login.jsx

import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';
import { styled } from '@mui/system';
import bgImage from '../../assets/bg.webp'; // Caminho relativo

const slideDown = keyframes`
  from {
    transform: translate(-50%, -200%);
  }
  to {
    transform: translate(-50%, -50%);
  }
`;

const LoginBox = styled(Box)(({ theme }) => ({
  animation: `${slideDown} 1s ease-out`,
  position: 'absolute',
  top: '50%',
  left: '50%',
  padding: '16px',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  backgroundColor: 'white',
  transform: 'translate(-50%, -50%)',
  maxWidth: '300px',
  width: '100%',
  textAlign: 'center', // Centralizando o conteúdo no centro da caixa
}));

const LoginTitle = styled(Typography)(({ theme }) => ({
  marginBottom: '16px',
  color: theme.palette.primary.main, // Cor do texto em primário
  textShadow: `1px 1px 2px ${theme.palette.primary.dark}`, // Efeito de sombra
  fontWeight: 'bold', // Texto em negrito
}));

const GreenButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.success.main, // Cor de fundo verde de acesso
  color: 'white',
  '&:hover': {
    backgroundColor: theme.palette.success.dark,
  },
}));

const Login = () => {
  const [emailFocused, setEmailFocused] = React.useState(false);
  const [passwordFocused, setPasswordFocused] = React.useState(false);

  return (
    <Box
    sx={{
      position: 'relative',
      width: '100%', // 100% da largura da janela
      height: '100vh', // 100% da altura da janela      
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000000',
      backgroundImage: `url(${bgImage})`, // Definindo a imagem de fundo
      backgroundSize: 'cover', // Cobrir toda a área
      backgroundPosition: 'center', // Centralizar a imagem
      overflow: 'hidden', // Evitar barra de rolagem      
    }}
    >
      <LoginBox>
        <LoginTitle variant="h5" component="h1">
          Login
        </LoginTitle>
        <TextField
          id="email"
          label="Email"
          variant="standard"
          fullWidth
          margin="normal"
          onFocus={() => setEmailFocused(true)}
          onBlur={() => setEmailFocused(false)}
        />
        <TextField
          id="password"
          label="Senha"
          variant="standard"
          type="password"
          fullWidth
          margin="normal"
          onFocus={() => setPasswordFocused(true)}
          onBlur={() => setPasswordFocused(false)}
        />
        <GreenButton variant="contained" fullWidth>
          Entrar
        </GreenButton>
      </LoginBox>
    </Box>
  );
}

export default Login;
