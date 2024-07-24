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
    Button
  } from '@mui/material';
  import { useLocation, useParams } from 'react-router-dom';
  //import axios from '../../api';
 // import { useState, useEffect } from 'react';
  
  // Função para formatar a data no formato dd/mm/yyyy
  const formatDate = (dateString) => {
    if (!dateString) return 'Desconhecida';
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };
  
  const FichaEvolucao = () => {
    const { id } = useParams(); // Captura o parâmetro 'id'
    const location = useLocation();
    const { name, date } = location.state || {}; // Captura o estado passado

    //const [formData, setFormData] = useState({
    //  estadoChegada:[],
    //  atividadeAtendimento:[],
    //  aspectosPsicologicos:{
    //    orientacao:[],
    //    humor:[]
    //  },
     // estadoSaida:[]
    //});

    //useEffect(() => {
      //função para buscar os dados
     // const fetchData = async () => {
      //  try {
      //    const response = await axios.get('evolutionPractitioner');
      //    const data = response.data;
     //   }
    //  }
   /// })
  
    console.log("ID do praticante:", id); // Verifica se o id está sendo capturado
  
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
          {/* Seção Estado de Chegada/Aproximação */}
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardHeader title="Estado de Chegada/Aproximação" sx={{color: '#1976d2', backgroundColor: '#e3f2fd', borderRadius: '8px 8px 0 0' }} />
            <CardContent>
              <FormGroup row sx={{ '& .MuiFormControlLabel-root': { margin: 2 } }}>
                <FormControlLabel control={<Checkbox id="inlineCheckbox1" value="option1" />} label="Tranquilo(a)" />
                <FormControlLabel control={<Checkbox id="inlineCheckbox2" value="option2" />} label="Agitado(a)" />
                <FormControlLabel control={<Checkbox id="inlineCheckbox3" value="option3" />} label="Ansioso(a)" />
                <FormControlLabel control={<Checkbox id="inlineCheckbox4" value="option4" />} label="Introspectivo(a)" />
                <FormControlLabel control={<Checkbox id="inlineCheckbox5" value="option5" />} label="Sonolento(a)" />
                <FormControlLabel control={<Checkbox id="inlineCheckbox6" value="option6" />} label="Irritado(a)" />
                <FormControlLabel control={<Checkbox id="inlineCheckbox7" value="option7" />} label="Choroso(a)" />
              </FormGroup>
            </CardContent>
          </Card>
  
          {/* Seção Atividade/Atendimento */}
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardHeader title="Atividade/Atendimento" sx={{color: '#1976d2', backgroundColor: '#e3f2fd', borderRadius: '8px 8px 0 0' }} />
            <CardContent>
              <TableContainer component={Paper} sx={{ borderRadius: '0 0 8px 8px' }}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Montaria:</Typography>
                        <FormControlLabel                          
                          control={<Checkbox id="activity1" value="independente" />}
                          label="Independente"
                        />
                      </TableCell>
                      <TableCell>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Alongamento:</Typography>
                        <FormControlLabel
                          control={<Checkbox id="activity2" value="ativo" />}
                          label="Ativo"
                        />
                      </TableCell>
                      <TableCell>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Maneabilidade:</Typography>
                        <FormControlLabel
                          control={<Checkbox id="activity3" value="independente" />}
                          label="Independente"
                        />
                      </TableCell>
                      <TableCell>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Fortalecimento:</Typography>
                        <FormControlLabel
                          control={<Checkbox id="activity4" value="mmss" />}
                          label="MMSS"
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <FormControlLabel
                          control={<Checkbox id="activity1" value="dependente" />}
                          label="Dependente"
                        />
                      </TableCell>
                      <TableCell>
                        <FormControlLabel
                          control={<Checkbox id="activity2" value="passivo" />}
                          label="Passivo"
                        />
                      </TableCell>
                      <TableCell>
                        <FormControlLabel
                          control={<Checkbox id="activity3" value="dependente" />}
                          label="Dependente"
                        />
                      </TableCell>
                      <TableCell>
                        <FormControlLabel
                          control={<Checkbox id="activity4" value="mmii" />}
                          label="MMII"
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="subtitle1">Andadura:</Typography>
                        <FormControlLabel
                          control={<Checkbox id="activity1" value="passo" />}
                          label="Passo"
                        />
                        <FormControlLabel
                          control={<Checkbox id="activity1" value="trote" />}
                          label="Trote"
                        />
                        <FormControlLabel
                          control={<Checkbox id="activity1" value="galope" />}
                          label="Galope"
                        />
                      </TableCell>
                      <TableCell>
                        <FormControlLabel
                          control={<Checkbox id="activity2" value="mmss" />}
                          label="MMSS"
                        />
                      </TableCell>
                      <TableCell></TableCell>   
                      <TableCell>
                        <FormControlLabel
                          control={<Checkbox id="activity4" value="tronco" />}
                          label="Tronco"
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell>
                        <FormControlLabel
                          control={<Checkbox id="activity2" value="mmii" />}
                          label="MMII"
                        />
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell>
                        <FormControlLabel
                          control={<Checkbox id="activity4" value="orofaciais" />}
                          label="Orofaciais"
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <FormControlLabel
                          control={<Checkbox id="activity1" value="coordenacao" />}
                          label="Coordenação"
                        />
                      </TableCell>
                      <TableCell>
                        <FormControlLabel
                          control={<Checkbox id="activity2" value="equilibrio" />}
                          label="Equilíbrio"
                        />
                      </TableCell>
                      <TableCell>
                        <FormControlLabel
                          control={<Checkbox id="activity3" value="bipedestacao" />}
                          label="Bipedestação"
                        />
                      </TableCell>
                      <TableCell>
                        <FormControlLabel
                          control={<Checkbox id="activity4" value="aclivedeclive" />}
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
                  <FormControlLabel control={<Checkbox id="interactionCheckbox1" value="interacao" />} label="Interação" />
                  <TextField id="interactionComment1" variant="standard" size="small" sx={{ flex: 1 }} />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', gap: 2, marginTop: 1 }}>
                  <FormControlLabel control={<Checkbox id="interactionCheckbox2" value="estimulacaoSensorial" />} label="Estimulação Sensorial" />
                  <TextField id="interactionComment2" variant="standard" size="small" sx={{ flex: 1 }} />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', gap: 2, marginTop: 1 }}>
                  <FormControlLabel control={<Checkbox id="interactionCheckbox3" value="brincadeira" />} label="Brincadeira" />
                  <TextField id="interactionComment3" variant="standard" size="small" sx={{ flex: 1 }} />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', gap: 2, marginTop: 1 }}>
                  <FormControlLabel control={<Checkbox id="interactionCheckbox4" value="outro" />} label="Outro" />
                  <TextField id="interactionComment4" variant="standard" size="small" sx={{ flex: 1 }} />
                </Box>
              </FormGroup>
            </CardContent>
          </Card>
  
          {/* Seção Aspectos Psicológicos/Comportamentais Durante o Atendimento */}
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardHeader title="Aspectos Psicológicos/Comportamentais Durante o Atendimento" sx={{color: '#1976d2', backgroundColor: '#e3f2fd', borderRadius: '8px 8px 0 0' }} />
            <CardContent>
              {/* Orientação */}
              <Typography variant="h6">Orientação:</Typography>
              <FormGroup row sx={{ marginTop: 1, '& .MuiFormControlLabel-root': { margin: 1 } }}>
                <FormControlLabel control={<Checkbox id="orientacaoTempo" value="tempo" />} label="Tempo" />
                <FormControlLabel control={<Checkbox id="orientacaoEspaco" value="espaco" />} label="Espaço" />
                <FormControlLabel control={<Checkbox id="orientacaoPessoa" value="pessoa" />} label="Pessoa" />
                <FormControlLabel control={<Checkbox id="orientacaoDeficit" value="deficit" />} label="Déficit" />
              </FormGroup>
  
              {/* Humor/Emoção */}
              <Typography variant="h6" sx={{ marginTop: 2 }}>Humor/Emoção:</Typography>
              <FormGroup row sx={{ marginTop: 1, '& .MuiFormControlLabel-root': { margin: 1 } }}>
                <FormControlLabel control={<Checkbox id="humorDeprimido" value="deprimido" />} label="Deprimido" />
                <FormControlLabel control={<Checkbox id="humorAnsioso" value="ansioso" />} label="Ansioso" />
                <FormControlLabel control={<Checkbox id="humorRaiva" value="raiva" />} label="Raiva" />
                <FormControlLabel control={<Checkbox id="humorTristeza" value="tristeza" />} label="Tristeza" />
                <FormControlLabel control={<Checkbox id="humorAlegria" value="alegria" />} label="Alegria" />
                <FormControlLabel control={<Checkbox id="humorApatia" value="apatia" />} label="Apatia" />
              </FormGroup>
  
              {/* Tabela de Aspectos Psicológicos */}
              <TableContainer component={Paper} sx={{ borderRadius: '0 0 8px 8px', marginTop: 2 }}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Atenção:</Typography>
                        <FormControlLabel
                          control={<Checkbox id="atencaoAdequada" value="adequada" />}
                          label="Adequada"
                        />
                        <FormControlLabel
                          control={<Checkbox id="atencaoDeficit" value="deficit" />}
                          label="Déficit"
                        />
                      </TableCell>
                      <TableCell>
                        <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Concentração:</Typography>
                        <FormControlLabel
                          control={<Checkbox id="concentracaoAdequada" value="adequada" />}
                          label="Adequada"
                        />
                        <FormControlLabel
                          control={<Checkbox id="concentracaoDeficit" value="deficit" />}
                          label="Déficit"
                        />
                      </TableCell>
                      <TableCell>
                        <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Memória:</Typography>
                        <FormControlLabel
                          control={<Checkbox id="memoriaAdequada" value="adequada" />}
                          label="Adequada"
                        />
                        <FormControlLabel
                          control={<Checkbox id="memoriaDeficit" value="deficit" />}
                          label="Déficit"
                        />
                      </TableCell>
                      <TableCell>
                        <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Cognição:</Typography>
                        <FormControlLabel
                          control={<Checkbox id="cognicaoAdequada" value="adequada" />}
                          label="Adequada"
                        />
                        <FormControlLabel
                          control={<Checkbox id="cognicaoDeficit" value="deficit" />}
                          label="Déficit"
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <FormControlLabel
                          control={<Checkbox id="agitacao" value="agitacao" />}
                          label="Agitação"
                        />
                      </TableCell>
                      <TableCell>
                        <FormControlLabel
                          control={<Checkbox id="birra" value="birra" />}
                          label="Birra"
                        />
                      </TableCell>
                      <TableCell>
                        <FormControlLabel
                          control={<Checkbox id="crise" value="crise" />}
                          label="Crise"
                        />
                      </TableCell>
                      <TableCell>
                        <FormControlLabel
                          control={<Checkbox id="choro" value="choro" />}
                          label="Choro"
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <FormControlLabel
                          control={<Checkbox id="heterolesao" value="heterolesao" />}
                          label="Heterolesão"
                        />
                      </TableCell>
                      <TableCell>
                        <FormControlLabel
                          control={<Checkbox id="autolesao" value="autolesao" />}
                          label="Autolesão"
                        />
                      </TableCell>
                      <TableCell>
                        <FormControlLabel
                          control={<Checkbox id="panico" value="panico" />}
                          label="Pânico/medo"
                        />
                      </TableCell>
                      <TableCell>
                        <FormControlLabel
                          control={<Checkbox id="frustracao" value="frustracao" />}
                          label="Frustração"
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <FormControlLabel
                          control={<Checkbox id="inseguranca" value="inseguranca" />}
                          label="Insegurança"
                        />
                      </TableCell>
                      <TableCell>
                        <FormControlLabel
                          control={<Checkbox id="tempoEspera" value="tempoEspera" />}
                          label="Tempo de espera"
                        />
                      </TableCell>
                      <TableCell>
                        <FormControlLabel
                          control={<Checkbox id="estereotipias" value="estereotipias" />}
                          label="Estereotipias vocais e/ou motoras"
                        />
                      </TableCell>
                      <TableCell>
                        <FormControlLabel
                          control={<Checkbox id="contatoVisual" value="contatoVisual" />}
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
                        color: '#1976d2' // Cor azul para o título
                    }} 
                />
                <CardContent>
                    <FormGroup row sx={{ '& .MuiFormControlLabel-root': { margin: 1 } }}>  
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <FormControlLabel control={<Checkbox id="saidaTranquilo" value="tranquilo" />} label="Tranquilo(a)" />
                            <FormControlLabel control={<Checkbox id="saidaAgitado" value="agitado" />} label="Agitado(a)" />
                            <FormControlLabel control={<Checkbox id="saidaOutros" value="outros" />} label="Outros" />
                        </Box>   
                        <TextField id="tranquiloAgitado" variant="standard" sx={{ flex: 1, marginLeft: 1 }} />
                    </FormGroup>
                    <FormGroup row sx={{ '& .MuiFormControlLabel-root': { margin: 1 } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography variant="h7" component="span">Alimentou o cavalo:</Typography>
                            <FormControlLabel control={<Radio id="alimentouCavaloSim" value="sim" />} label="Sim" />
                            <FormControlLabel control={<Radio id="alimentouCavaloNao" value="nao" />} label="Não" />
                        </Box>
                        <TextField id="alimentouCavalo" variant="standard" sx={{ flex: 1, marginLeft: 1 }} />
                    </FormGroup>
                    <FormGroup row sx={{ '& .MuiFormControlLabel-root': { margin: 1 } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography variant="h7" component="span">Despediu-se:</Typography>
                            <FormControlLabel control={<Radio id="despediuSim" value="sim" />} label="Sim" />
                            <FormControlLabel control={<Radio id="despediuNao" value="nao" />} label="Não" />
                        </Box>
                        <TextField id="Despediuse" variant="standard" sx={{ flex: 1, marginLeft: 1 }} />
                    </FormGroup>
                    <FormGroup row sx={{ '& .MuiFormControlLabel-root': { margin: 1 } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography variant="h7" component="span">Intercorrências:</Typography>
                            <FormControlLabel control={<Radio id="intercorrenciasSim" value="sim" />} label="Sim" />
                            <FormControlLabel control={<Radio id="intercorrenciasNao" value="nao" />} label="Não" />
                        </Box>
                        <TextField id="intercorrencias" variant="standard" sx={{ flex: 1, marginLeft: 1 }} />
                    </FormGroup>
                    <Box sx={{ marginTop: 3 }}>
                        <Typography variant="h6" sx={{color: '#1976d2', fontWeight: 'bold', marginBottom: 1 }}>Observação</Typography>

                               
                        <TextField
                            multiline
                            rows={4}
                            variant="outlined"
                            placeholder="Digite suas observações aqui..."
                            fullWidth
                            sx={{ marginBottom: 3 }}
                        />
                        <Typography variant="h6" sx={{color: '#1976d2', fontWeight: 'bold', marginBottom: 1 }}>Profissionais da Equipe</Typography>
                        <TextField
                            variant="outlined"
                            placeholder="Digite os nomes dos profissionais aqui..."
                            fullWidth
                        />
                    </Box>
                </CardContent>
            </Card>    
                 {/* Botão para Enviar Dados */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginTop: 1 }}>
          <Button variant="contained" color="primary" onClick={() => alert('Dados enviados!')}>
            Enviar Dados
          </Button>
        </Box>    
        </Box>               
      </Box>
    );
  };
  
  export default FichaEvolucao;
  