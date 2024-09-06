import { useState } from 'react';
import { TextField, Button, Grid, MenuItem, Box, Paper, Typography } from '@mui/material';
import InputMask from 'react-input-mask';
import axios from '../../api';

const Usuario = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    name: '',
    email: '',
    birthDate: '',
    contact: "",
    cpf: '',
    profession: ''
  });

  const professions = [
    'Psicólogo',
    'Fisioterapeuta',
    'Fonoaudiólogo',
    'Terapeuta Ocupacional',
    'Equitador',
    'Auxiliar'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/users', formData);
      alert('Usuário cadastrado com sucesso!');
    } catch (error) {
      console.error('Houve um erro ao cadastrar o usuário!', error);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
      <Paper sx={{ p: 3, maxWidth: 600, width: '100%' }}>
        <Typography variant="h4" gutterBottom align="center">
          Cadastro de Usuário
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Nome Completo"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Nome"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <InputMask
                mask="99/99/9999"
                value={formData.birthDate}
                onChange={handleChange}
              >
                {() => (
                  <TextField
                    label="Data de Nascimento"
                    name="birthDate"
                    fullWidth
                    required
                  />
                )}
              </InputMask>
            </Grid>
            <Grid item xs={12}>
              <InputMask
                mask="999.999.999-99"
                value={formData.cpf}
                onChange={handleChange}
              >
                {() => (
                  <TextField
                    label="CPF"
                    name="cpf"
                    fullWidth
                    required
                  />
                )}
              </InputMask>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Profissão"
                name="profession"
                select
                value={formData.profession}
                onChange={handleChange}
                fullWidth
                required
              >
                {professions.map((profession) => (
                  <MenuItem key={profession} value={profession}>
                    {profession}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Cadastrar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default Usuario;
