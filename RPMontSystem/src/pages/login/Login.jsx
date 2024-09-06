import { Box, TextField, Button, Typography, Link } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import brasaoBackground from '../../assets/brasao.jpeg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../api'; 
import styles from './Login.module.css';

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
        if (`${user.sector}` === "veterinaria") {
          navigate(`/${user.sector.toLowerCase()}` + "/listar-equino"); // Redireciona para a página do setor
        } else {
          navigate(`/${user.sector.toLowerCase()}`); // Redireciona para a página do setor
        }

      } else {
        setError('Email ou senha inválidos');
      }
    } catch (error) {
      console.error('Erro ao verificar credenciais', error);
      setError('Erro ao verificar credenciais');
    }
  };

  return (
    <div className={styles.loginContainer} style={{ backgroundImage: `url(${brasaoBackground})` }}>
      <Box className={styles.loginBox}>
        <Typography className={styles.loginTitle} variant="h5" component="h1">
          Login
        </Typography>
        <Box className={styles.inputContainer}>
          <Box className={styles.iconWrapper}>
            <PersonIcon />
          </Box>
          <TextField
            id="email"
            label="Email"
            variant="standard"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box className={styles.inputContainer}>
          <Box className={styles.iconWrapper}>
            <LockIcon />
          </Box>
          <TextField
            id="password"
            label="Senha"
            variant="standard"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        {error && <Typography color="error">{error}</Typography>}
        <Button className={styles.blueButton} variant="contained" fullWidth onClick={handleLogin}>
          Entrar
        </Button>
        <Link className={styles.forgotPasswordLink} href="#" variant="body2">
          Esqueceu sua senha?
        </Link>
      </Box>
    </div>
  );
};

export default Login;