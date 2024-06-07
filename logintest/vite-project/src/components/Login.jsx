// src/Login.jsx

import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';
import { styled } from '@mui/system';

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
  maxWidth: '400px',
  width: '100%',
  textAlign: 'center', // Centralizando o conteúdo no centro da caixa
}));

const LoginTitle = styled(Typography)(({ theme }) => ({
  marginBottom: '16px',
  color: theme.palette.primary.main, // Cor do texto em primário
  textShadow: `1px 1px 2px ${theme.palette.primary.dark}`, // Efeito de sombra
  fontWeight: 'bold', // Texto em negrito
}));

const InputLabel = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  pointerEvents: 'none',
  left: '16px',
  top: '50%',
  transform: 'translateY(-50%)',
  transition: 'transform 0.2s ease-out, font-size 0.2s ease-out',
  color: ({ focused, theme }) => (focused ? theme.palette.primary.main : theme.palette.text.secondary),
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
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
      }}
    >
      <LoginBox>
        <LoginTitle variant="h5" component="h1">
          Login
        </LoginTitle>
        <InputLabel
          htmlFor="email"
          variant="subtitle2"
          focused={emailFocused}
          style={{ top: emailFocused ? '10px' : '50%' }} // Ajustando a posição quando focado
        >
          
        </InputLabel>
        <TextField
          id="email"
          label="Email"
          variant="standard"
          fullWidth
          margin="normal"
          onFocus={() => setEmailFocused(true)}
          onBlur={() => setEmailFocused(false)}
        />
        <InputLabel
          htmlFor="password"
          variant="subtitle2"
          focused={passwordFocused}
          style={{ top: passwordFocused ? '10px' : '50%' }} // Ajustando a posição quando focado
        >
          
        </InputLabel>
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
};

export default Login;
