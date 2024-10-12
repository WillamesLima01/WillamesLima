import { useState, useEffect } from 'react';
import { TextField, Button, Grid, MenuItem, Box, Paper, Typography, IconButton, InputAdornment, Card, CardHeader } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material'; // Importando ícones de visibilidade
import InputMask from 'react-input-mask';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../api';

const UserForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        name: '',
        email: '',
        birthDate: '',
        contact: '',
        cpf: '',
        profession: '',
        password: ''
      });
      const [showPassword, setShowPassword] = useState(false); // Estado para controlar visibilidade da senha
      const navigate = useNavigate();
      const { id } = useParams();      
      const [errorMessage, setErrorMessage] = useState('');
    
      const professions = [
        'Psicólogo',
        'Fisioterapeuta',
        'Fonoaudiólogo',
        'Terapeuta Ocupacional',
        'Veterinário',
        'Equitador',
        'Auxiliar Administrativo',
        'Auxiliar Veterinário'
      ];
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      useEffect(() => {
        if (id) {          
          axios.get(`/users/${id}`)
            .then(response => {
              const data = response.data;
              setFormData({
                fullName: data.fullName || '',
                name: data.name || '',
                email: data.email || '',
                cpf: data.cpf || '',
                contact: data.contact || '',
                password: data.password || '',
                profession: data.profession || ''
              });
            })
            .catch(error => {
              console.error('Erro ao buscar Praticante', error);
              handleErrors(error);
            });
        } else {
          setFormData({
            fullName: '', name: '', email: '', cpf: '', contact: '', password: '', profession: ''
          });
        }
      }, [id]);

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          if (id) {
            await axios.put(`/users/${id}`, formData);
            alert('Usuário atualizado com sucesso!');
          } else {
            await axios.post('/users', formData);
            alert('Usuário cadastrado com sucesso!');
          }
          navigate('/usuarios');
        } catch (error) {
          console.error('Houve um erro ao cadastrar/atualizar o usuário!', error);
        }
      };
    
      function handleErrors(error) {
        if (error.response) {
          if (error.response.status === 400) {
            if (Array.isArray(error.response.data)) {
              setErrorMessage(error.response.data.join(', '));
            } else {
              setErrorMessage(error.response.data.message || 'Ocorreu um erro desconhecido');
            }
          }
        }
      }
    
      const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
      };
    
      return (
        <Box sx={{ display: 'flex', justifyContent: 'center', p:6, marginTop: 5, height: '100%', borderRadius: 8, maxHeight: '100%', backgroundColor: `rgba(143,188,143, 0.7)` }}>
          <Paper sx={{ p: 3, maxWidth: 700, width: '100%', marginTop: 3, height: '30%', borderRadius: 5, backgroundColor: 'rgba(255,250,240, 0.9)' }}>
            <Typography variant="h4" gutterBottom align="center">
            <CardHeader 
                  title={id ? 'Editar Usuário' : 'Adicionar Usuário'}
                  sx={{
                    backgroundColor: '#e3f2fd', // Cor de fundo azul claro
                    borderRadius: '8px 8px 0 0' // Bordas arredondadas na parte superior
                  }}
                  titleTypographyProps={{
                    style: {
                      color: '#1976d2', // Definindo a cor com RGB
                      fontWeight: 'bold', // Negrito
                      fontSize: '30px', // Definindo o tamanho da fonte
                      textTransform: 'uppercase', // Transformar o texto em maiúsculas
                      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' // Sombra do texto
                    }
                  }}
                />

                            
            </Typography>
            {errorMessage && (
              <Typography variant="body1" color="error" align="center">
                {errorMessage}
              </Typography>
            )}
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
                    autoComplete="off"
                  />
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
                  <InputMask
                    mask="(99) 9 99999999"
                    value={formData.contact}
                    onChange={handleChange}
                  >
                    {() => (
                      <TextField
                        label="Contato"
                        name="contact"
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
    
                {/* Campo de senha com visibilidade controlada */}
                <Grid item xs={12}>
                <TextField
                    label="Senha"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    fullWidth
                    required
                    autoComplete="new-password" // Evita o preenchimento automático de senha
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={togglePasswordVisibility}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
                <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                                      
                            
                  
                    
                </Card>

    
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                    {id ? 'Atualizar' : 'Adicionar'}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Box>
      );
}

export default UserForm