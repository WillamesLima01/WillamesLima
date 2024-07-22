import { Box, Card, CardContent, CardHeader, Checkbox, FormControlLabel, FormGroup, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useLocation, useParams } from 'react-router-dom';

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
                    <CardHeader title="Estado de Chegada/Aproximação" sx={{ backgroundColor: '#e3f2fd', borderRadius: '8px 8px 0 0' }} />
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
                    <CardHeader title="Atividade/Atendimento" sx={{ backgroundColor: '#e3f2fd', borderRadius: '8px 8px 0 0' }} />
                    <CardContent>
                        <TableContainer component={Paper} sx={{ borderRadius: '0 0 8px 8px' }}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: 'bold' }}>Montaria</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' }}>Alongamento</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' }}>Maneabilidade</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' }}>Fortalecimento</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            <FormControlLabel
                                                control={<Checkbox id="activity1" value="independente" />}
                                                label="Independente"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <FormControlLabel
                                                control={<Checkbox id="activity2" value="ativo" />}
                                                label="Ativo"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <FormControlLabel
                                                control={<Checkbox id="activity3" value="independente" />}
                                                label="Independente"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <FormControlLabel
                                                control={<Checkbox id="activity4" value="mmss" />}
                                                label="MMSS"
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <FormControlLabel
                                                control={<Checkbox id="activity1" value="independente" />}
                                                label="Dependente"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <FormControlLabel
                                                control={<Checkbox id="activity2" value="ativo" />}
                                                label="Passivo"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <FormControlLabel
                                                control={<Checkbox id="activity3" value="independente" />}
                                                label="Dependente"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <FormControlLabel
                                                control={<Checkbox id="activity4" value="mmss" />}
                                                label="MMII"
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <h6>Andadura:</h6>
                                            <FormControlLabel
                                                control={<Checkbox id="activity1" value="independente" />}
                                                label="Passo"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox id="activity1" value="independente" />}
                                                label="Trote"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox id="activity1" value="independente" />}
                                                label="Galope"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <FormControlLabel
                                                control={<Checkbox id="activity2" value="ativo" />}
                                                label="MMSS"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <h6></h6>
                                        </TableCell>
                                        <TableCell>
                                            <FormControlLabel
                                                control={<Checkbox id="activity4" value="mmss" />}
                                                label="Tronco"
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <h6></h6>
                                        </TableCell>
                                        <TableCell>
                                            <FormControlLabel
                                                control={<Checkbox id="activity2" value="ativo" />}
                                                label="MMII"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <h6></h6>
                                        </TableCell>
                                        <TableCell>
                                            <FormControlLabel
                                                control={<Checkbox id="activity4" value="mmss" />}
                                                label="Orofaciais"
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <FormControlLabel
                                                control={<Checkbox id="activity1" value="independente" />}
                                                label="Coordenação"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <FormControlLabel
                                                control={<Checkbox id="activity2" value="ativo" />}
                                                label="Equilíbrio"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <FormControlLabel
                                                control={<Checkbox id="activity3" value="independente" />}
                                                label="Bipedestação"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <FormControlLabel
                                                control={<Checkbox id="activity4" value="mmss" />}
                                                label="Aclive/Declive"
                                            />
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
};

export default FichaEvolucao;
