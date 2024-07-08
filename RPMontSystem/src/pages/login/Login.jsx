import { Box, TextField, Button, Typography, Link } from '@mui/material';
import { keyframes } from '@emotion/react';
import { styled } from '@mui/system';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import brasaoBackground from '../../assets/brasao.jpeg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../api'; // Certifique-se que o axios está configurado corretamente

const slideDown = keyframes`
  from {
    transform: translate(-50%, -200%);
  }
  to {
    transform: translate(-50%, -50%);
  }
`;

const LoginBox = styled(Box)({
  animation: `${slideDown} 1s ease-out`,
  position: 'absolute',
  top: '50%',
  left: '50%',
  padding: '16px',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  transform: 'translate(-50%, -50%)',
  maxWidth: '300px',
  width: '100%',
  textAlign: 'center',
  overflow: 'hidden',
});

const LoginTitle = styled(Typography)({
  marginBottom: '16px',
  color: '#3f51b5',
  textShadow: '1px 1px 2px #303f9f',
  fontWeight: 'bold',
});

const BlueButton = styled(Button)({
  backgroundColor: '#5A86D5', // Cor de fundo azul suave
  color: 'white',
  '&:hover': {
    backgroundColor: '#008000', // Muda para verde ao passar o mouse
  },
});

const InputContainer = styled(Box)({
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: '16px',
});

const IconWrapper = styled(Box)({
  marginRight: '8px',
  display: 'flex',
  alignItems: 'center',
  color: '#5A86D5', // Azul suave 
  paddingBottom: '1px',
});

const ForgotPasswordLink = styled(Link)({
  marginTop: '8px', // Espaçamento superior
  display: 'block',
  color: '#3f51b5',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const LoginContainer = styled(Box)({
  position: 'relative',
  width: '95vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: `url(${brasaoBackground})`, // Imagem de fundo
  backgroundSize: 'cover', // Ajusta a imagem para cobrir a tela inteira
  backgroundPosition: 'center', // Centraliza a imagem
  backgroundRepeat: 'no-repeat', // Evita repetição da imagem
  backgroundColor: '#f0f0f0',
  overflow: 'hidden', // Adiciona overflow hidden para prevenir rolagem
});

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Por favor, preencha todos os campos!');
      return;
    }

    try {
      const response = await axios.get('/users');
      const users = response.data;

      const user = users.find(user => user.email === email && user.password === password);
      
      if (user) {
        setError('');
        alert('Login bem-sucedido');
        navigate(`/${user.setor.toLowerCase()}`); // Redireciona para a página do setor        

      } else {
        setError('Email ou senha inválidos');
      }
    } catch (error) {
      console.error('Erro ao verificar credenciais', error);
      setError('Erro ao verificar credenciais');
    }
  };

  return (
    <LoginContainer>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputContainer>
        {error && <Typography color="error">{error}</Typography>}
        <BlueButton variant="contained" fullWidth onClick={handleLogin}>
          Entrar
        </BlueButton>
        <ForgotPasswordLink href="#" variant="body2">
          Esqueceu sua senha?
        </ForgotPasswordLink>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;
