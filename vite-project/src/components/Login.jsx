import React from 'react';
import { Box, TextField, Button, Typography, Link } from '@mui/material';
import { keyframes } from '@emotion/react';
import { styled } from '@mui/system';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import brasaoBackground from '../assets/brasao.jpeg'

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
  textAlign: 'center',
}));

const LoginTitle = styled(Typography)(({ theme }) => ({
  marginBottom: '16px',
  color: theme.palette.primary.main,
  textShadow: `1px 1px 2px ${theme.palette.primary.dark}`,
  fontWeight: 'bold',
}));

const BlueButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#5A86D5', // Cor de fundo azul suave
  color: 'white',
  '&:hover': {
    backgroundColor: '#008000', // Muda para verde ao passar o mouse
  },
}));

const InputContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: '16px',
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  marginRight: '8px',
  display: 'flex',
  alignItems: 'center',
  color: '#5A86D5', // Azul suave 
  paddingBottom: '1px',
}));

const ForgotPasswordLink = styled(Link)(({ theme }) => ({
  marginTop: '8px', // Espaçamento superior
  display: 'block',
  color: theme.palette.primary.main,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));
const LoginContainer = styled(Box)({
  position: 'relative',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: `url(${brasaoBackground})`, // Imagem de fundo
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundColor: '#f0f0f0',
});

const Login = () => {
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
        <InputContainer>
          <IconWrapper>
            <PersonIcon />
          </IconWrapper>
          <TextField
            id="email"
            label="Email"
            variant="standard"
            fullWidth
          />
        </InputContainer>
        <InputContainer>
          <IconWrapper>
            <LockIcon />
          </IconWrapper>
          <TextField
            id="password"
            label="Senha"
            variant="standard"
            type="password"            
            fullWidth
          />
        </InputContainer>
        <BlueButton variant="contained" fullWidth>
          Entrar
        </BlueButton>
        <ForgotPasswordLink href="#" variant="body2">
          Esqueceu sua senha?
        </ForgotPasswordLink>
      </LoginBox>
    </Box>
  );
};

export default Login;
