import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
  Radio,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  TextField,
  Button,
  Dialog,
  DialogTitle
} from '@mui/material';
import { useLocation, useParams } from 'react-router-dom';
import axios from '../../api';

const formatDate = (dateString) => {
  if (!dateString) return 'Desconhecida';
  const [year, month, day] = dateString.split('-');
  return `${day}/${month}/${year}`;
};

const FichaEvolucao = () => {
  const { id } = useParams(); 
  const location = useLocation();
  const { name, date } = location.state || {};

  const [formData, setFormData] = useState({
    practitionerId: id,
    date: new Date().toISOString().split('T')[0],
    arrivalState: [],
    activityService: [],
    psychologicalAspects: {
      consciousness: [],
      humor: [],
      attention: [],
      others: ''
    },
    exitState: [],
    observation: '',
    professionals: ''
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (event) => {
    const { id, value, checked, type } = event.target;
    const [category, ...rest] = id.split(/(?=[A-Z])/);
    const key = rest.join('');

    setFormData((prevData) => {
      if (category === 'psychologicalAspects') {
        if (type === 'checkbox') {
          if (checked) {
            return {
              ...prevData,
              psychologicalAspects: {
                ...prevData.psychologicalAspects,
                [key.toLowerCase()]: [...prevData.psychologicalAspects[key.toLowerCase()], value]
              }
            };
          } else {
            return {
              ...prevData,
              psychologicalAspects: {
                ...prevData.psychologicalAspects,
                [key.toLowerCase()]: prevData.psychologicalAspects[key.toLowerCase()].filter(item => item !== value)
              }
            };
          }
        } else {
          return {
            ...prevData,
            psychologicalAspects: {
              ...prevData.psychologicalAspects,
              [key.toLowerCase()]: value
            }
          };
        }
      } else {
        if (type === 'checkbox') {
          if (checked) {
            return {
              ...prevData,
              [category.toLowerCase()]: Array.isArray(prevData[category.toLowerCase()]) ? [...prevData[category.toLowerCase()], value] : [value]
            };
          } else {
            return {
              ...prevData,
              [category.toLowerCase()]: Array.isArray(prevData[category.toLowerCase()]) ? prevData[category.toLowerCase()].filter(item => item !== value) : []
            };
          }
        } else {
          return {
            ...prevData,
            [category.toLowerCase()]: {
              ...prevData[category.toLowerCase()],
              [key.toLowerCase()]: value
            }
          };
        }
      }
    });
  };

  const handleSubmit = () => {
    axios.post('/evolutionPractitioner', formData)
      .then(() => {
        setShowSuccessModal(true);
        setTimeout(() => setShowSuccessModal(false), 3000);
      })
      .catch((error) => console.error('Erro ao enviar os dados:', error));
  };

  console.log("ID do praticante:", id); 

  return (
    <Box sx={{ marginTop: 4, padding: 3, backgroundColor: 'rgba(143,188,143, 0.7)', minHeight: '100vh', borderRadius: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', marginBottom: 4 }}>
        Ficha de Evolução
      </Typography>
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h6" sx={{ color: 'blue' }}>Nome do Praticante: {name || 'Desconhecido'}</Typography>
        <Typography variant="h6" sx={{ color: 'blue' }}>Data: {formatDate(date)}</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
          <CardHeader title="Estado de Chegada/Aproximação" sx={{color: '#1976d2', backgroundColor: '#e3f2fd', borderRadius: '8px 8px 0 0' }} />
          <CardContent>
            <FormGroup row sx={{ '& .MuiFormControlLabel-root': { margin: 2 } }}>
              <FormControlLabel control={<Checkbox id="arrivalStateTranquilo" value="Tranquilo" onChange={handleChange} />} label="Tranquilo(a)" />
              <FormControlLabel control={<Checkbox id="arrivalStateAgitado" value="Agitado" onChange={handleChange} />} label="Agitado(a)" />
              <FormControlLabel control={<Checkbox id="arrivalStateAnsioso" value="Ansioso" onChange={handleChange} />} label="Ansioso(a)" />
              <FormControlLabel control={<Checkbox id="arrivalStateIntrospectivo" value="Introspectivo" onChange={handleChange} />} label="Introspectivo(a)" />
              <FormControlLabel control={<Checkbox id="arrivalStateSonolento" value="Sonolento" onChange={handleChange} />} label="Sonolento(a)" />
              <FormControlLabel control={<Checkbox id="arrivalStateIrritado" value="Irritado" onChange={handleChange} />} label="Irritado(a)" />
              <FormControlLabel control={<Checkbox id="arrivalStateChoroso" value="Choroso" onChange={handleChange} />} label="Choroso(a)" />
            </FormGroup>
          </CardContent>
        </Card>

        {/* Seção Atividade/Atendimento */}
        <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
          <CardHeader title="Atividade/Atendimento" sx={{ color: '#1976d2', backgroundColor: '#e3f2fd', borderRadius: '8px 8px 0 0' }} />
          <CardContent>
            <TableContainer component={Paper} sx={{ borderRadius: '0 0 8px 8px' }}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Montaria:</Typography>
                      <FormControlLabel
                        control={<Checkbox id="activityServiceIndependente" value="Independente" onChange={handleChange} />}
                        label="Independente"
                      />
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Alongamento:</Typography>
                      <FormControlLabel
                        control={<Checkbox id="activityServiceAtivo" value="Ativo" onChange={handleChange} />}
                        label="Ativo"
                      />
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Maneabilidade:</Typography>
                      <FormControlLabel
                        control={<Checkbox id="activityServiceIndependente" value="Independente" onChange={handleChange} />}
                        label="Independente"
                      />
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Fortalecimento:</Typography>
                      <FormControlLabel
                        control={<Checkbox id="activityServiceMMSS" value="MMSS" onChange={handleChange} />}
                        label="MMSS"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <FormControlLabel
                        control={<Checkbox id="activityServiceDependente" value="Dependente" onChange={handleChange} />}
                        label="Dependente"
                      />
                    </TableCell>
                    <TableCell>
                      <FormControlLabel
                        control={<Checkbox id="activityServicePassivo" value="Passivo" onChange={handleChange} />}
                        label="Passivo"
                      />
                    </TableCell>
                    <TableCell>
                      <FormControlLabel
                        control={<Checkbox id="activityServiceDependente" value="Dependente" onChange={handleChange} />}
                        label="Dependente"
                      />
                    </TableCell>
                    <TableCell>
                      <FormControlLabel
                        control={<Checkbox id="activityServiceMMII" value="MMII" onChange={handleChange} />}
                        label="MMII"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="subtitle1">Andadura:</Typography>
                      <FormControlLabel
                        control={<Checkbox id="activityServicePasso" value="Passo" onChange={handleChange} />}
                        label="Passo"
                      />
                      <FormControlLabel
                        control={<Checkbox id="activityServiceTrote" value="Trote" onChange={handleChange} />}
                        label="Trote"
                      />
                      <FormControlLabel
                        control={<Checkbox id="activityServiceGalope" value="Galope" onChange={handleChange} />}
                        label="Galope"
                      />
                    </TableCell>
                    <TableCell>
                      <FormControlLabel
                        control={<Checkbox id="activityServiceMMSS" value="MMSS" onChange={handleChange} />}
                        label="MMSS"
                      />
                    </TableCell>
                    <TableCell></TableCell>   
                    <TableCell>
                      <FormControlLabel
                        control={<Checkbox id="activityServiceTronco" value="Tronco" onChange={handleChange} />}
                        label="Tronco"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>
                      <FormControlLabel
                        control={<Checkbox id="activityServiceMMII" value="MMII" onChange={handleChange} />}
                        label="MMII"
                      />
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                      <FormControlLabel
                        control={<Checkbox id="activityServiceOrofaciais" value="Orofaciais" onChange={handleChange} />}
                        label="Orofaciais"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <FormControlLabel
                        control={<Checkbox id="activityServiceCoordenacao" value="Coordenação" onChange={handleChange} />}
                        label="Coordenação"
                      />
                    </TableCell>
                    <TableCell>
                      <FormControlLabel
                        control={<Checkbox id="activityServiceEquilibrio" value="Equilíbrio" onChange={handleChange} />}
                        label="Equilíbrio"
                      />
                    </TableCell>
                    <TableCell>
                      <FormControlLabel
                        control={<Checkbox id="activityServiceBipedestacao" value="Bipedestação" onChange={handleChange} />}
                        label="Bipedestação"
                      />
                    </TableCell>
                    <TableCell>
                      <FormControlLabel
                        control={<Checkbox id="activityServiceAcliveDeclive" value="Aclive/Declive" onChange={handleChange} />}
                        label="Aclive/Declive"
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            {/* Seção Interação dentro do Card Atividade/Atendimento */}              
            <FormGroup sx={{ marginTop: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', gap: 2 }}>
                <FormControlLabel control={<Checkbox id="activityServiceInteracao" value="Interação" onChange={handleChange} />} label="Interação" />
                <TextField id="activityServiceInteracaoComment" variant="standard" size="small" sx={{ flex: 1 }} onChange={handleChange} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', gap: 2, marginTop: 1 }}>
                <FormControlLabel control={<Checkbox id="activityServiceEstimulaçãoSensorial" value="Estimulação Sensorial" onChange={handleChange} />} label="Estimulação Sensorial" />
                <TextField id="activityServiceEstimulaçãoSensorialComment" variant="standard" size="small" sx={{ flex: 1 }} onChange={handleChange} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', gap: 2, marginTop: 1 }}>
                <FormControlLabel control={<Checkbox id="activityServiceBrincadeira" value="Brincadeira" onChange={handleChange} />} label="Brincadeira" />
                <TextField id="activityServiceBrincadeiraComment" variant="standard" size="small" sx={{ flex: 1 }} onChange={handleChange} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', gap: 2, marginTop: 1 }}>
                <FormControlLabel control={<Checkbox id="activityServiceOutro" value="Outro" onChange={handleChange} />} label="Outro" />
                <TextField id="activityServiceOutroComment" variant="standard" size="small" sx={{ flex: 1 }} onChange={handleChange} />
              </Box>
            </FormGroup>
          </CardContent>
        </Card>

        {/* Seção Aspectos Psicológicos/Comportamentais Durante o Atendimento */}
        <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
          <CardHeader title="Aspectos Psicológicos/Comportamentais Durante o Atendimento" sx={{ color: '#1976d2', backgroundColor: '#e3f2fd', borderRadius: '8px 8px 0 0' }} />
          <CardContent>
            {/* Orientação */}
            <Typography variant="h6">Orientação:</Typography>
            <FormGroup row sx={{ marginTop: 1, '& .MuiFormControlLabel-root': { margin: 1 } }}>
              <FormControlLabel control={<Checkbox id="psychologicalAspectsConsciousnessTempo" value="Tempo" onChange={handleChange} />} label="Tempo" />
              <FormControlLabel control={<Checkbox id="psychologicalAspectsConsciousnessEspaco" value="Espaço" onChange={handleChange} />} label="Espaço" />
              <FormControlLabel control={<Checkbox id="psychologicalAspectsConsciousnessPessoa" value="Pessoa" onChange={handleChange} />} label="Pessoa" />
              <FormControlLabel control={<Checkbox id="psychologicalAspectsConsciousnessDeficit" value="Déficit" onChange={handleChange} />} label="Déficit" />
            </FormGroup>

            {/* Humor/Emoção */}
            <Typography variant="h6" sx={{ marginTop: 2 }}>Humor/Emoção:</Typography>
            <FormGroup row sx={{ marginTop: 1, '& .MuiFormControlLabel-root': { margin: 1 } }}>
              <FormControlLabel control={<Checkbox id="psychologicalAspectsHumorDeprimido" value="Deprimido" onChange={handleChange} />} label="Deprimido" />
              <FormControlLabel control={<Checkbox id="psychologicalAspectsHumorAnsioso" value="Ansioso" onChange={handleChange} />} label="Ansioso" />
              <FormControlLabel control={<Checkbox id="psychologicalAspectsHumorRaiva" value="Raiva" onChange={handleChange} />} label="Raiva" />
              <FormControlLabel control={<Checkbox id="psychologicalAspectsHumorTristeza" value="Tristeza" onChange={handleChange} />} label="Tristeza" />
              <FormControlLabel control={<Checkbox id="psychologicalAspectsHumorAlegria" value="Alegria" onChange={handleChange} />} label="Alegria" />
              <FormControlLabel control={<Checkbox id="psychologicalAspectsHumorApatia" value="Apatia" onChange={handleChange} />} label="Apatia" />
            </FormGroup>

            {/* Tabela de Aspectos Psicológicos */}
            <TableContainer component={Paper} sx={{ borderRadius: '0 0 8px 8px', marginTop: 2 }}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Atenção:</Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <FormControlLabel
                          control={<Checkbox id="psychologicalAspectsAttentionAdequada" value="Adequada" onChange={handleChange} />}
                          label="Adequada"
                        />
                        <FormControlLabel
                          control={<Checkbox id="psychologicalAspectsAttentionDeficit" value="Déficit" onChange={handleChange} />}
                          label="Déficit"
                        />
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Concentração:</Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <FormControlLabel
                          control={<Checkbox id="psychologicalAspectsConcentrationAdequada" value="Adequada" onChange={handleChange} />}
                          label="Adequada"
                        />
                        <FormControlLabel
                          control={<Checkbox id="psychologicalAspectsConcentrationDeficit" value="Déficit" onChange={handleChange} />}
                          label="Déficit"
                        />
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Memória:</Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <FormControlLabel
                          control={<Checkbox id="psychologicalAspectsMemoryAdequada" value="Adequada" onChange={handleChange} />}
                          label="Adequada"
                        />
                        <FormControlLabel
                          control={<Checkbox id="psychologicalAspectsMemoryDeficit" value="Déficit" onChange={handleChange} />}
                          label="Déficit"
                        />
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Cognição:</Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <FormControlLabel
                          control={<Checkbox id="psychologicalAspectsCognitionAdequada" value="Adequada" onChange={handleChange} />}
                          label="Adequada"
                        />
                        <FormControlLabel
                          control={<Checkbox id="psychologicalAspectsCognitionDeficit" value="Déficit" onChange={handleChange} />}
                          label="Déficit"
                        />
                      </Box>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <FormControlLabel
                        control={<Checkbox id="psychologicalAspectsAgitacao" value="Agitação" onChange={handleChange} />}
                        label="Agitação"
                      />
                    </TableCell>
                    <TableCell>
                      <FormControlLabel
                        control={<Checkbox id="psychologicalAspectsBirra" value="Birra" onChange={handleChange} />}
                        label="Birra"
                      />
                    </TableCell>
                    <TableCell>
                      <FormControlLabel
                        control={<Checkbox id="psychologicalAspectsCrise" value="Crise" onChange={handleChange} />}
                        label="Crise"
                      />
                    </TableCell>
                    <TableCell>
                      <FormControlLabel
                        control={<Checkbox id="psychologicalAspectsChoro" value="Choro" onChange={handleChange} />}
                        label="Choro"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <FormControlLabel
                        control={<Checkbox id="psychologicalAspectsHeterolesao" value="Heterolesão" onChange={handleChange} />}
                        label="Heterolesão"
                      />
                    </TableCell>
                    <TableCell>
                      <FormControlLabel
                        control={<Checkbox id="psychologicalAspectsAutolesao" value="Autolesão" onChange={handleChange} />}
                        label="Autolesão"
                      />
                    </TableCell>
                    <TableCell>
                      <FormControlLabel
                        control={<Checkbox id="psychologicalAspectsPanico" value="Pânico/medo" onChange={handleChange} />}
                        label="Pânico/medo"
                      />
                    </TableCell>
                    <TableCell>
                      <FormControlLabel
                        control={<Checkbox id="psychologicalAspectsFrustracao" value="Frustração" onChange={handleChange} />}
                        label="Frustração"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <FormControlLabel
                        control={<Checkbox id="psychologicalAspectsInseguranca" value="Insegurança" onChange={handleChange} />}
                        label="Insegurança"
                      />
                    </TableCell>
                    <TableCell>
                      <FormControlLabel
                        control={<Checkbox id="psychologicalAspectsTempoEspera" value="Tempo de espera" onChange={handleChange} />}
                        label="Tempo de espera"
                      />
                    </TableCell>
                    <TableCell>
                      <FormControlLabel
                        control={<Checkbox id="psychologicalAspectsEstereotipias" value="Estereotipias vocais e/ou motoras" onChange={handleChange} />}
                        label="Estereotipias vocais e/ou motoras"
                      />
                    </TableCell>
                    <TableCell>
                      <FormControlLabel
                        control={<Checkbox id="psychologicalAspectsContatoVisual" value="Contato visual/Sustentação" onChange={handleChange} />}
                        label="Contato visual/Sustentação"
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>

        {/* Seção Estado de Saída/Finalização */}
        <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
          <CardHeader 
            title="Estado de Saída/Finalização" 
            sx={{ 
              backgroundColor: '#e3f2fd', 
              borderRadius: '8px 8px 0 0',
              color: '#1976d2' 
            }} 
          />
          <CardContent>
            <FormGroup row sx={{ '& .MuiFormControlLabel-root': { margin: 1 } }}>  
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <FormControlLabel control={<Checkbox id="exitStateTranquilo" value="Tranquilo" onChange={handleChange} />} label="Tranquilo(a)" />
                <FormControlLabel control={<Checkbox id="exitStateAgitado" value="Agitado" onChange={handleChange} />} label="Agitado(a)" />
                <FormControlLabel control={<Checkbox id="exitStateOutros" value="Outros" onChange={handleChange} />} label="Outros" />
              </Box>   
              <TextField id="exitStateComment" variant="standard" sx={{ flex: 1, marginLeft: 1 }} onChange={handleChange} />
            </FormGroup>
            <FormGroup row sx={{ '& .MuiFormControlLabel-root': { margin: 1 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="h7" component="span">Alimentou o cavalo:</Typography>
                <FormControlLabel control={<Radio id="alimentouCavaloSim" value="Sim" onChange={handleChange} />} label="Sim" />
                <FormControlLabel control={<Radio id="alimentouCavaloNao" value="Não" onChange={handleChange} />} label="Não" />
              </Box>
              <TextField id="alimentouCavaloComment" variant="standard" sx={{ flex: 1, marginLeft: 1 }} onChange={handleChange} />
            </FormGroup>
            <FormGroup row sx={{ '& .MuiFormControlLabel-root': { margin: 1 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="h7" component="span">Despediu-se:</Typography>
                <FormControlLabel control={<Radio id="despediuSim" value="Sim" onChange={handleChange} />} label="Sim" />
                <FormControlLabel control={<Radio id="despediuNao" value="Não" onChange={handleChange} />} label="Não" />
              </Box>
              <TextField id="despediuComment" variant="standard" sx={{ flex: 1, marginLeft: 1 }} onChange={handleChange} />
            </FormGroup>
            <FormGroup row sx={{ '& .MuiFormControlLabel-root': { margin: 1 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="h7" component="span">Intercorrências:</Typography>
                <FormControlLabel control={<Radio id="intercorrenciasSim" value="Sim" onChange={handleChange} />} label="Sim" />
                <FormControlLabel control={<Radio id="intercorrenciasNao" value="Não" onChange={handleChange} />} label="Não" />
              </Box>
              <TextField id="intercorrenciasComment" variant="standard" sx={{ flex: 1, marginLeft: 1 }} onChange={handleChange} />
            </FormGroup>
            <Box sx={{ marginTop: 3 }}>
              <Typography variant="h6" sx={{ color: '#1976d2', fontWeight: 'bold', marginBottom: 1 }}>Observação</Typography>
              <TextField
                multiline
                rows={4}
                variant="outlined"
                placeholder="Digite suas observações aqui..."
                fullWidth
                sx={{ marginBottom: 3 }}
                onChange={handleChange}
                id="observation"
              />
              <Typography variant="h6" sx={{ color: '#1976d2', fontWeight: 'bold', marginBottom: 1 }}>Profissionais da Equipe</Typography>
              <TextField
                variant="outlined"
                placeholder="Digite os nomes dos profissionais aqui..."
                fullWidth
                onChange={handleChange}
                id="professionals"
              />
            </Box>
          </CardContent>
        </Card>

        {/* Botão para Enviar Dados */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginTop: 1 }}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Enviar Dados
          </Button>
        </Box>
      </Box>

      {/* Modal de Sucesso */}
      <Dialog open={showSuccessModal} onClose={() => setShowSuccessModal(false)}>
        <DialogTitle>Dados enviados com sucesso!</DialogTitle>
      </Dialog>
    </Box>
  );
};

export default FichaEvolucao;
