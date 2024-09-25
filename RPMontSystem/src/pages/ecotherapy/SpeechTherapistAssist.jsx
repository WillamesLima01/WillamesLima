import { useState } from 'react';
import { 
    Box, 
    Card, 
    CardContent, 
    CardHeader, 
    Checkbox,
    Radio,
    FormControlLabel,
    TextField, 
    Button, 
    Typography, 
    Paper, 
    Table,
    TableBody,
    TableCell,
    RadioGroup,
    FormGroup,
    TableContainer,
    TableRow, } from '@mui/material';
import { useLocation, useParams } from 'react-router-dom';

const formatDate = (dateString) => {
  if (!dateString) return 'Desconhecido';
  const [year, month, day] = dateString.split('-');
  return `${day}/${month}/${year}`;
}

const SpeechTherapistAssist = () => {
  const { id } = useParams();
  const location = useLocation();
  const { name, birthDate } = location.state || {};

  const [formData, setFormData] = useState({
    name: name || '',
    birthDate: birthDate || '',
    caseSummary: '',
    controleCervical: '',
    controleTronco: '',
    rolou: '',
    sentou: '',
    engatinhou: '',
    andou: '',
    alimentouCavaloComment: '',
    despediuComment: '',
    intercorrenciasComment: ''
  });

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
        ...prevState,
        [name]: value,
    }));
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('Dados enviados:', formData);
    // Aqui você pode adicionar a lógica para enviar os dados, como uma chamada de API
  };

  

  return (
    <Box sx={{ padding: 3, marginTop: 4, backgroundColor: 'rgba(143,188,143, 0.7)', minHeight: '100vh', borderRadius: 4, width: '100%' }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', marginBottom: 4 }}>
        Ficha de ANAMNESE        
      </Typography>

      <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', marginBottom: 4 }}>
        Avaliação FonoAudiológica
      </Typography>

      {/* Nome do praticante e data */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h6" sx={{ color: 'blue' }}>Nome do Praticante: {formData.name || 'Desconhecido'}</Typography>
        <Typography variant="h6" sx={{ color: 'blue' }}>Data de Nascimento: {formatDate(formData.birthDate)}</Typography>
      </Box>

      {/* Seção diagnóstico clínico */}
      <Card sx={{ marginBottom: 4, boxShadow: 3, borderRadius: 2 }}>
        <CardHeader title="Diagnóstico Clínico" sx={{ backgroundColor: '#e3f2fd', color: '#1976d2' }} />
        <CardContent>
          <TextField
            label="Digite aqui seu diagnóstico clínico..."
            id="diagnosticoClinico"
            value={formData.diagnosticoClinico}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
        </CardContent>
      </Card>

       {/* Seção diagnóstico Fonoaudiologo */}
       <Card sx={{ marginBottom: 4, boxShadow: 3, borderRadius: 2 }}>
        <CardHeader title="Diagnóstico FonoAudiológico" sx={{ backgroundColor: '#e3f2fd', color: '#1976d2' }} />
        <CardContent>
          <TextField
            label="Digite aqui seu diagnóstico fonoaudiológico..."
            id="diagnosticoFono"
            value={formData.diagnosticoFono}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
        </CardContent>
      </Card>

       {/* Seção queixa */}
       <Card sx={{ marginBottom: 4, boxShadow: 3, borderRadius: 2 }}>
        <CardHeader title="Principal queixa" sx={{ backgroundColor: '#e3f2fd', color: '#1976d2' }} />
        <CardContent>
          <TextField
            label="Digite aqui..."
            id="queixa"
            value={formData.queixa}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
        </CardContent>
      </Card>

       {/* Seção relato de caso */}
       <Card sx={{ marginBottom: 4, boxShadow: 3, borderRadius: 2 }}>
        <CardHeader title="Relato de caso" sx={{ backgroundColor: '#e3f2fd', color: '#1976d2' }} />
        <CardContent>
          <TextField
            label="Digite aqui..."
            id="relatodecaso"
            value={formData.relatodecaso}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
        </CardContent>
      </Card>

       {/* Seção medicação */}
       <Card sx={{ marginBottom: 4, boxShadow: 3, borderRadius: 2 }}>
        <CardHeader title="Uso de medicação" sx={{ backgroundColor: '#e3f2fd', color: '#1976d2' }} />
        <CardContent>
          <TextField
            label="Digite aqui..."
            id="usomedicacao"
            value={formData.usomedicacao}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
        </CardContent>
      </Card>

      {/* Seção exames */}
      <Card sx={{ marginBottom: 4, boxShadow: 3, borderRadius: 2 }}>
        <CardHeader title="Exames" sx={{ backgroundColor: '#e3f2fd', color: '#1976d2' }} />
        <CardContent>
        <TableContainer component={Paper} sx={{ borderRadius: '0 0 8px 8px' }}>
              <Table>
                <TableBody>
                  <TableRow>
                  <TableCell>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Teste da linguinha:</Typography>                      
                    </TableCell>

                    <TableCell>                      
                      <FormControlLabel
                        control={<Checkbox id="activityServiceIndependente" value="Normal" onChange={handleChange} />}
                        label="Normal"
                      />
                    </TableCell>
                     <TableCell></TableCell>
                    <TableCell>                      
                      <FormControlLabel
                        control={<Checkbox id="activityServiceIndependente" value="alterado" onChange={handleChange} />}
                        label="Alterado"
                      />
                    </TableCell>
                    <TableCell></TableCell> 
                    <TableCell>                      
                      <FormControlLabel
                        control={<Checkbox id="activityServiceIndependente" value="Não fez" onChange={handleChange} />}
                        label="Não fez"
                      />
                    </TableCell>                         
                  </TableRow>                  
                  <TableRow>
                  <TableCell>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Teste da Orelhinha:</Typography>                      
                    </TableCell>  

                    <TableCell>                      
                      <FormControlLabel
                        control={<Checkbox id="activityServiceIndependente" value="Normal" onChange={handleChange} />}
                        label="Normal"
                      />
                    </TableCell> 
                    <TableCell></TableCell>                    
                    <TableCell>                      
                      <FormControlLabel
                        control={<Checkbox id="activityServiceIndependente" value="alterado" onChange={handleChange} />}
                        label="Alterado"
                      />
                    </TableCell>
                    <TableCell></TableCell> 
                    <TableCell>                      
                      <FormControlLabel
                        control={<Checkbox id="activityServiceIndependente" value="Não fez" onChange={handleChange} />}
                        label="Não fez"
                      />
                    </TableCell>                         
                  </TableRow>                     
                  
                </TableBody>
              </Table>
            </TableContainer>
          
        </CardContent>
      </Card>

       {/* Seção gestação do parto */}
       <Card sx={{ marginBottom: 4, boxShadow: 3, borderRadius: 2 }}>
        <CardHeader title="Condições de gestação do parto" sx={{ backgroundColor: '#e3f2fd', color: '#1976d2' }} />
        <CardContent>
        <TableContainer component={Paper} sx={{ borderRadius: '0 0 8px 8px' }}>
              <Table>
                <TableBody>
                  <TableRow>                   
                        <TableCell>                                             
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Condições:</Typography>                  
                        </TableCell>
                        
                        <TableCell>                        
                        <FormControlLabel
                            control={<Checkbox id="activityServiceIndependente" value="Normal" onChange={handleChange} />}
                            label="Nº de filhos"
                        />                        
                        </TableCell> 
                        
                        <TableCell>                                             
                        <FormControlLabel
                            control={<Checkbox id="activityServiceIndependente" value="alterado" onChange={handleChange} />}
                            label="aborto"
                        />                       
                        </TableCell> 
                        
                        <TableCell>                                             
                        <FormControlLabel
                            control={<Checkbox id="activityServiceIndependente" value="alterado" onChange={handleChange} />}
                            label="Casos semelhantes na família"
                        />                       
                        </TableCell>  
                        <TableCell>                                             
                        <FormControlLabel
                            control={<Checkbox id="activityServiceIndependente" value="alterado" onChange={handleChange} />}
                            label="Parentesco entre pais"
                        />                       
                        </TableCell>  
                        <TableCell></TableCell>    
                    </TableRow>  

                  <TableRow>
                    <TableCell>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Gestação:</Typography>  
                    </TableCell> 
                    <TableCell>                                           
                      <FormControlLabel
                        control={<Checkbox id="activityServiceIndependente" value="Normal" onChange={handleChange} />}
                        label="a termo"
                      />
                    </TableCell>
                     
                    <TableCell>                      
                      <FormControlLabel
                        control={<Checkbox id="activityServiceIndependente" value="alterado" onChange={handleChange} />}
                        label="pré-termo"
                      />
                    </TableCell>  
                                        
                    <TableCell>                      
                      <FormControlLabel
                        control={<Checkbox id="activityServiceIndependente" value="alterado" onChange={handleChange} />}
                        label="pós-termo"
                      />
                    </TableCell>  
                    <TableCell></TableCell>
                    <TableCell></TableCell>                                                           
                  </TableRow>

                  <TableRow>
                    <TableCell>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Tipo de parto:</Typography>                                             
                    </TableCell> 

                    <TableCell>                                           
                      <FormControlLabel
                        control={<Checkbox id="activityServiceIndependente" value="Normal" onChange={handleChange} />}
                        label="Normal"
                      />
                    </TableCell> 
                     
                    <TableCell>                      
                      <FormControlLabel
                        control={<Checkbox id="activityServiceIndependente" value="alterado" onChange={handleChange} />}
                        label="Cesariana"
                      />
                    </TableCell>  
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>                                                    
                  </TableRow>

                  <TableRow>
                    <TableCell>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Condições de Nascimento:</Typography>                                                                
                    </TableCell> 
                    <TableCell>                    
                      <FormControlLabel
                        control={<Checkbox id="activityServiceIndependente" value="Normal" onChange={handleChange} />}
                        label="Choro"
                      />                      
                    </TableCell> 
                     
                    <TableCell>                      
                      <FormControlLabel
                        control={<Checkbox id="activityServiceIndependente" value="alterado" onChange={handleChange} />}
                        label="MalFormação"
                      />                       
                    </TableCell>  
                                      
                    <TableCell>                      
                      <FormControlLabel
                        control={<Checkbox id="activityServiceIndependente" value="alterado" onChange={handleChange} />}
                        label="Cianótico"
                      />
                    </TableCell> 
                    <TableCell>                      
                      <FormControlLabel
                        control={<Checkbox id="activityServiceIndependente" value="alterado" onChange={handleChange} />}
                        label="Icterícia"
                      />
                    </TableCell>  
                    <TableCell>                      
                      <FormControlLabel
                        control={<Checkbox id="activityServiceIndependente" value="alterado" onChange={handleChange} />}
                        label="Convulsões"
                      />
                    </TableCell>                                        
                  </TableRow>         
                  
                </TableBody>
              </Table>
            </TableContainer>
        </CardContent>
      </Card>
       {/* Seção desenvolvimento motor */}
       <Card sx={{ marginBottom: 4, boxShadow: 3, borderRadius: 2 }}>
            <CardHeader title="Desenvolvimento motor" sx={{ backgroundColor: '#e3f2fd', color: '#1976d2' }} />
            <CardContent>

                {/* Controle Cervical */}
                <FormGroup sx={{ marginBottom: 3 }}>
                    <Typography variant="h7" component="span">Controle cervical:</Typography>
                    <RadioGroup
                        name="controleCervical"
                        value={formData.controleCervical}
                        onChange={handleRadioChange}
                        row
                    >
                        <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                        <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    </RadioGroup>
                    <TextField 
                        id="alimentouCavaloComment" 
                        variant="standard" 
                        sx={{ flex: 1, marginTop: 2 }} 
                        onChange={handleRadioChange} 
                        placeholder="Idade" 
                    />
                </FormGroup>

                {/* Controle de Tronco */}
                <FormGroup sx={{ marginBottom: 3 }}>
                    <Typography variant="h7" component="span">Controle de tronco:</Typography>
                    <RadioGroup
                        name="controleTronco"
                        value={formData.controleTronco}
                        onChange={handleRadioChange}
                        row                        
                    >
                        <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                        <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    </RadioGroup>
                    <TextField 
                        id="despediuComment" 
                        variant="standard" 
                        sx={{ flex: 1, marginTop: 2 }} 
                        onChange={handleRadioChange} 
                        placeholder="Idade"
                    />
                </FormGroup>

                {/* Rolou */}
                <FormGroup sx={{ marginBottom: 3 }}>
                    <Typography variant="h7" component="span">Rolou:</Typography>
                    <RadioGroup
                        name="rolou"
                        value={formData.rolou}
                        onChange={handleRadioChange}
                        row
                    >
                        <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                        <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    </RadioGroup>
                    <TextField 
                        id="rolouComment" 
                        variant="standard" 
                        sx={{ flex: 1, marginTop: 2 }} 
                        onChange={handleRadioChange} 
                        placeholder="Idade"
                    />
                </FormGroup>

                {/* Sentou */}
                <FormGroup sx={{ marginBottom: 3 }}>
                    <Typography variant="h7" component="span">Sentou:</Typography>
                    <RadioGroup
                        name="sentou"
                        value={formData.sentou}
                        onChange={handleRadioChange}
                        row
                    >
                        <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                        <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    </RadioGroup>
                    <TextField 
                        id="sentouComment" 
                        variant="standard" 
                        sx={{ flex: 1, marginTop: 2 }} 
                        onChange={handleRadioChange}
                        placeholder="Idade" 
                    />
                </FormGroup>

                {/* Engatinhou */}
                <FormGroup sx={{ marginBottom: 3 }}>
                    <Typography variant="h7" component="span">Engatinhou:</Typography>
                    <RadioGroup
                        name="engatinhou"
                        value={formData.engatinhou}
                        onChange={handleRadioChange}
                        row
                    >
                        <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                        <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    </RadioGroup>
                    <TextField 
                        id="engatinhouComment" 
                        variant="standard" 
                        sx={{ flex: 1, marginTop: 2 }} 
                        onChange={handleRadioChange} 
                        placeholder="Idade"
                    />
                </FormGroup>

                {/* Andou */}
                <FormGroup sx={{ marginBottom: 3 }}>
                    <Typography variant="h7" component="span">Andou:</Typography>
                    <RadioGroup
                        name="andou"
                        value={formData.andou}
                        onChange={handleRadioChange}
                        row
                    >
                        <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                        <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    </RadioGroup>
                    <TextField 
                        id="andouComment" 
                        variant="standard" 
                        sx={{ flex: 1, marginTop: 2 }} 
                        onChange={handleRadioChange} 
                        placeholder="Idade"
                    />
                </FormGroup>               
            </CardContent>
        </Card>
        <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
          <CardHeader title="Reflexos primitivos" sx={{color: '#1976d2', backgroundColor: '#e3f2fd', borderRadius: '8px 8px 0 0' }} />
          <CardContent>
            <FormGroup row sx={{ '& .MuiFormControlLabel-root': { margin: 1 } }}>
              <FormControlLabel control={<Checkbox id="rtca" value="rtca" onChange={handleChange} />} label="RTCA" />
              <FormControlLabel control={<Checkbox id="rtcs" value="rtcs" onChange={handleChange} />} label="RTCS" />
              <FormControlLabel control={<Checkbox id="rprensao" value="rprensao" onChange={handleChange} />} label="Reflexo prensão" />
              <FormControlLabel control={<Checkbox id="rMoro" value="rMoro" onChange={handleChange} />} label="Reflexo de moro" />              
            </FormGroup>            
            <TextField
                label="Outros"
                id="queixa"
                value={formData.queixa}
                onChange={handleChange}
                fullWidth
                margin="normal"
                multiline                
                rows={1}
            />                
          </CardContent>
        </Card>
        <Card sx={{ boxShadow: 3, borderRadius: 2, marginTop: 4 }}>
          <CardHeader title="Análise  da linguagem expressiva" sx={{color: '#1976d2', backgroundColor: '#e3f2fd', borderRadius: '8px 8px 0 0' }} />
          <label style={{ marginLeft: '16px', marginTop: '10px' }}>1. Percepção (visual/tátil/auditiva)</label>
          <CardContent>
            <FormGroup row sx={{ '& .MuiFormControlLabel-root': { margin: 1 } }}>
              <FormControlLabel control={<Checkbox id="rtca" value="rtca" onChange={handleChange} />} label="Cor" />
              <FormControlLabel control={<Checkbox id="rtcs" value="rtcs" onChange={handleChange} />} label="Reconhece" />
              <FormControlLabel control={<Checkbox id="rprensao" value="rprensao" onChange={handleChange} />} label="Discrimina" />
              <FormControlLabel control={<Checkbox id="rMoro" value="rMoro" onChange={handleChange} />} label="Nomeia" />              
            </FormGroup>            
            <TextField
                label="Quais..."
                id="queixa"
                value={formData.queixa}
                onChange={handleChange}
                fullWidth
                margin="normal"
                multiline                
                rows={1}
            />    
          </CardContent>
          <label style={{ marginLeft: '16px', marginTop: '10px' }}>2. Forma:</label>
          <CardContent>
            <FormGroup row sx={{ '& .MuiFormControlLabel-root': { margin: 1 } }}>
              <FormControlLabel control={<Checkbox id="rtca" value="rtca" onChange={handleChange} />} label="Círculo" />
              <FormControlLabel control={<Checkbox id="rtcs" value="rtcs" onChange={handleChange} />} label="Triângulo" />
              <FormControlLabel control={<Checkbox id="rprensao" value="rprensao" onChange={handleChange} />} label="Quadrado" />
              <FormControlLabel control={<Checkbox id="rMoro" value="rMoro" onChange={handleChange} />} label="Retângulo" />              
            </FormGroup>                      
          </CardContent>
          <label style={{ marginLeft: '16px', marginTop: '10px' }}>3. Quantidade:</label>
          <CardContent>
            <FormGroup row sx={{ '& .MuiFormControlLabel-root': { margin: 1 } }}>
              <FormControlLabel control={<Checkbox id="rtca" value="rtca" onChange={handleChange} />} label="Maior" />
              <FormControlLabel control={<Checkbox id="rtcs" value="rtcs" onChange={handleChange} />} label="Menor" />
              <FormControlLabel control={<Checkbox id="rprensao" value="rprensao" onChange={handleChange} />} label="Mais" />
              <FormControlLabel control={<Checkbox id="rMoro" value="rMoro" onChange={handleChange} />} label="Menos" /> 
              <FormControlLabel control={<Checkbox id="rprensao" value="rprensao" onChange={handleChange} />} label="Muito" />
              <FormControlLabel control={<Checkbox id="rMoro" value="rMoro" onChange={handleChange} />} label="Pouco" />  
              <FormControlLabel control={<Checkbox id="rprensao" value="rprensao" onChange={handleChange} />} label="Alto" />
              <FormControlLabel control={<Checkbox id="rMoro" value="rMoro" onChange={handleChange} />} label="Baixo" />                                  
            </FormGroup>                      
          </CardContent>
          <label style={{ marginLeft: '16px', marginTop: '10px' }}>4. Orientação Espacial:</label>
          <CardContent>
            <FormGroup row sx={{ '& .MuiFormControlLabel-root': { margin: 1 } }}>
              <FormControlLabel control={<Checkbox id="rtca" value="rtca" onChange={handleChange} />} label="Frente" />
              <FormControlLabel control={<Checkbox id="rtcs" value="rtcs" onChange={handleChange} />} label="Trás" />
              <FormControlLabel control={<Checkbox id="rprensao" value="rprensao" onChange={handleChange} />} label="Dentro" />
              <FormControlLabel control={<Checkbox id="rMoro" value="rMoro" onChange={handleChange} />} label="Fora" /> 
              <FormControlLabel control={<Checkbox id="rprensao" value="rprensao" onChange={handleChange} />} label="Perto" />
              <FormControlLabel control={<Checkbox id="rMoro" value="rMoro" onChange={handleChange} />} label="Longe" />                
            </FormGroup>                      
          </CardContent>
          <label style={{ marginLeft: '16px', marginTop: '10px' }}>5. Orientação Temporal:</label>
          <CardContent>
            <FormGroup row sx={{ '& .MuiFormControlLabel-root': { margin: 1 } }}>
              <FormControlLabel control={<Checkbox id="rtca" value="rtca" onChange={handleChange} />} label="Ontem" />
              <FormControlLabel control={<Checkbox id="rtcs" value="rtcs" onChange={handleChange} />} label="Hoje" />
              <FormControlLabel control={<Checkbox id="rprensao" value="rprensao" onChange={handleChange} />} label="Amanhã" />
              <FormControlLabel control={<Checkbox id="rMoro" value="rMoro" onChange={handleChange} />} label="Antes" /> 
              <FormControlLabel control={<Checkbox id="rprensao" value="rprensao" onChange={handleChange} />} label="Depois" />                            
            </FormGroup>                      
          </CardContent>
          <label style={{ marginLeft: '16px', marginTop: '10px' }}>6. Esquema Corporal:</label>
          <CardContent>
            <FormGroup row sx={{ '& .MuiFormControlLabel-root': { margin: 1 } }}>
              <FormControlLabel control={<Checkbox id="rtca" value="rtca" onChange={handleChange} />} label="Reconhece em si" />
              <FormControlLabel control={<Checkbox id="rtcs" value="rtcs" onChange={handleChange} />} label="Reconhece no outro" />                                
            </FormGroup> 
            {/* Esquema corporal */}
            <FormGroup sx={{ marginBottom: 3, marginLeft: 3 }}>
                <Typography variant="h7" component="span">Nomeia?</Typography>
                <RadioGroup
                    name="sentou"
                    value={formData.sentou}
                    onChange={handleRadioChange}
                    row
                >
                    <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                    <FormControlLabel value="Não" control={<Radio />} label="Não" />
                </RadioGroup>
                <TextField 
                    id="sentouComment" 
                    variant="standard" 
                    sx={{ flex: 1, marginTop: 2 }} 
                    onChange={handleRadioChange}
                    placeholder="Quais" 
                />
            </FormGroup> 
            <FormGroup sx={{ marginBottom: 3, marginLeft: 3 }}>
                <Typography variant="h7" component="span">Identifica e Localiza sons apresentados?</Typography>
                <RadioGroup
                    name="sentou"
                    value={formData.sentou}
                    onChange={handleRadioChange}
                    row
                >
                    <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                    <FormControlLabel value="Não" control={<Radio />} label="Não" />
                </RadioGroup>
                <TextField 
                    id="sentouComment" 
                    variant="standard" 
                    sx={{ flex: 1, marginTop: 2 }} 
                    onChange={handleRadioChange}
                    placeholder="especifique" 
                />
            </FormGroup>   
            <FormGroup sx={{ marginBottom: 3, marginLeft: 3 }}>
                <Typography variant="h7" component="span">Apresenta alteração de memória imediata?</Typography>
                <RadioGroup
                    name="sentou"
                    value={formData.sentou}
                    onChange={handleRadioChange}
                    row
                >
                    <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                    <FormControlLabel value="Não" control={<Radio />} label="Não" />
                </RadioGroup>                
            </FormGroup>     
            <FormGroup sx={{ marginBottom: 3, marginLeft: 3 }}>
                <Typography variant="h7" component="span">Apresenta dificuldade na atenção/concentração?</Typography>
                <RadioGroup
                    name="sentou"
                    value={formData.sentou}
                    onChange={handleRadioChange}
                    row
                >
                    <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                    <FormControlLabel value="Não" control={<Radio />} label="Não" />
                </RadioGroup>                
            </FormGroup>   
            <label style={{ marginTop: '10px' }}>7. Emissão Oral:</label>
            <FormGroup sx={{ marginBottom: 3, marginLeft: 3, marginTop: '16px' }}>                
                <Typography variant="h7" component="span">Elaboração e esstruturação de frases?</Typography>
                <TextField 
                    id="sentouComment" 
                    variant="standard" 
                    sx={{ flex: 1, marginTop: 2 }} 
                    onChange={handleRadioChange}
                    placeholder="especifique" 
                />
            </FormGroup>   
            <FormGroup sx={{ marginBottom: 3, marginLeft: 3, marginTop: '16px' }}>                
                <Typography variant="h7" component="span">Reconhecimento e nomeação dos objetos?</Typography>
                <TextField 
                    id="sentouComment" 
                    variant="standard" 
                    sx={{ flex: 1, marginTop: 2 }} 
                    onChange={handleRadioChange}
                    placeholder="especifique" 
                />
            </FormGroup> 
            <FormGroup sx={{ marginBottom: 3, marginLeft: 3, marginTop: '16px' }}>                
                <Typography variant="h7" component="span">Vocabulário?</Typography>
                <TextField 
                    id="sentouComment" 
                    variant="standard" 
                    sx={{ flex: 1, marginTop: 2 }} 
                    onChange={handleRadioChange}
                    placeholder="especifique" 
                />
            </FormGroup> 
            <FormGroup sx={{ marginBottom: 3, marginLeft: 3, marginTop: '16px' }}>                
                <Typography variant="h7" component="span">Apresenta dificuldade na produção articulatória?</Typography>
                <TextField 
                    id="sentouComment" 
                    variant="standard" 
                    sx={{ flex: 1, marginTop: 2 }} 
                    onChange={handleRadioChange}
                    placeholder="especifique" 
                />
            </FormGroup> 
            <FormGroup sx={{ marginBottom: 3, marginLeft: 3, marginTop: '16px' }}>                
                <Typography variant="h7" component="span">Apresenta alteração de linguagem?</Typography>
                <TextField 
                    id="sentouComment" 
                    variant="standard" 
                    sx={{ flex: 1, marginTop: 2 }} 
                    onChange={handleRadioChange}
                    placeholder="especifique" 
                />
            </FormGroup>            
                              
          </CardContent>
        </Card>
      {/* Botão de Envio */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginTop: 3 }}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Enviar Dados
        </Button>
      </Box>
    </Box>
  );
};

export default SpeechTherapistAssist;
