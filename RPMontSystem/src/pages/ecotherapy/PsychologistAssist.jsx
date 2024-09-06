import { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Button,
  Typography
} from '@mui/material';
import { useLocation, useParams } from 'react-router-dom'; // Para pegar dados da URL ou estado anterior

const formatDate = (dateString) => {
  if (!dateString) return 'Desconhecida';
  const [year, month, day] = dateString.split('-');
  return `${day}/${month}/${year}`;
};

const PsychologistAssist = () => {
  const { id } = useParams(); // Pega o ID do praticante da URL
  const location = useLocation(); // Pega dados do estado anterior (da lista de praticantes)
  const { name, birthDate } = location.state || {}; // Se houver dados na rota, os pega aqui

  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    caseSummary: '',
    saude1: '',
    saude2: '',
    rotina1: '',
    rotina2: '',
    rotina3: '',
    rotina4: '',
    rotina5: '',
    interacaoSocial1: '',
    interacaoSocial2: '',
    interacaoSocial3: '',
    interacaoSocial4: '',
    interacaoSocial5: '',
    interacaoSocial6: '',
    interacaoSocial7: '',
    interacaoSocial8: '',
    interacaoSocial9: '',
    interacaoSocial10: '',
    interacaoSocial11: '',
    interacaoSocial12: '',
    interacaoSocial13: '',
    interacaoSocial14: '',
    interacaoSocial15: '',
    dificuldadesDesafios1: '',
    dificuldadesDesafios2: '',
    aprendizagem1: '',
    aprendizagem2: '',
    aprendizagem3: '',
    aprendizagem4: '',
    psicomotricidade1: '',
    psicomotricidade2: '',
    psicomotricidade3: '',
    psicomotricidade4: '',
    comunicacaoLinguagem1: '',
    comunicacaoLinguagem2: '',
    comunicacaoLinguagem3: '',
    comunicacaoLinguagem4: '',
    observacoes: ''
  });

  // Quando o componente é montado, preenche os dados do praticante
  useEffect(() => {
    if (name && birthDate) {
      setFormData({
        ...formData,
        name,
        birthDate,
      });
    }
  }, [name, birthDate]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = () => {
    // Função para enviar os dados
    console.log(formData);
  };

  return (
    <Box sx={{ padding: 3, marginTop: 4, backgroundColor: 'rgba(143,188,143, 0.7)', minHeight: '100vh', borderRadius: 4, width: '100%' }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', marginBottom: 4 }}>
        Ficha de Avaliação Psicológica
      </Typography>

      {/* Nome do praticante e data */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h6" sx={{ color: 'blue' }}>Nome do Praticante: {formData.name || 'Desconhecido'}</Typography>
        <Typography variant="h6" sx={{ color: 'blue' }}>Data de Nascimento: {formatDate(formData.birthDate)}</Typography>
      </Box>

      {/* Seção Síntese do Caso */}     
      <Card sx={{ marginBottom: 4, boxShadow: 3, borderRadius: 2 }}>
        <CardHeader title="Síntese do Caso" sx={{ backgroundColor: '#e3f2fd', color: '#1976d2' }} />
        <CardContent>
          <TextField
            label="Digite aqui sua síntese do Caso..."
            id="caseSummary"
            value={formData.caseSummary}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
        </CardContent>
      </Card>

      {/* Seção Saúde e Medicação */}
      <Card sx={{ marginBottom: 4, boxShadow: 3, borderRadius: 2 }}>
        <CardHeader title="Saúde" sx={{ backgroundColor: '#e3f2fd', color: '#1976d2' }} />
        <CardContent>
          <TextField
            label="Como é a saúde do praticante? Observe influência dos aspectos emocionais em sua saúde?"
            id="saude1"
            value={formData.saude1}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />
          <TextField
            label="Toma alguma medicação? Quais horários e dosagem?"
            id="saude2"
            value={formData.saude2}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />      
        </CardContent>
      </Card>   

      {/* Seção Rotina */}
      <Card sx={{ marginBottom: 4, boxShadow: 3, borderRadius: 2 }}>
        <CardHeader title="Rotina" sx={{ backgroundColor: '#e3f2fd', color: '#1976d2' }} />
        <CardContent>
          <TextField
            label="Descreva a rotina"
            id="rotina1"
            value={formData.rotina1}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={3}
          />
          <TextField
            label="Aceita mudanças na rotina? Como reage?"
            id="rotina2"
            value={formData.rotina2}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />
            <TextField
            label="Apresenta alteração no sono?"
            id="rotina3"
            value={formData.rotina3}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />
          <TextField
            label="Quais atividades, de lazer que participa(Passeios, visita, atividades culturais)?"
            id="rotina4"
            value={formData.rotina4}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />
          <TextField
            label="Quais atividades, atendimentos ou terapias que tem durante a semana além da equoterapia?(dias, 
            horários, pessoa responsável, qual a companhia que tem na atividade)."
            id="rotina5"
            value={formData.rotina5}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />       
        </CardContent>
      </Card>

      {/* Seção interação social */}
      <Card sx={{ marginBottom: 4, boxShadow: 3, borderRadius: 2 }}>
        <CardHeader title="Interação Social" sx={{ backgroundColor: '#e3f2fd', color: '#1976d2' }} />
        <CardContent>
          <TextField
            label="Como demonstra afetividade?"
            id="interacaoSocial1"
            value={formData.interacaoSocial1}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />
          <TextField
            label="Costuma brincar? Com quem? Como reage frente as brincadeiras e jogos?"
            id="interacaoSocial2"
            value={formData.interacaoSocial2}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />
            <TextField
            label="Sabe o que é certo e errado?"
            id="interacaoSocial3"
            value={formData.interacaoSocial3}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />
          <TextField
            label="Como reage a frustação?"
            id="interacaoSocial4"
            value={formData.interacaoSocial4}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />
          <TextField
            label="Como a família se posiciona frente à comportamento opositor(birra, choro, agressão, etc)?"
            id="interacaoSocial5"
            value={formData.interacaoSocial5}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />     
          <TextField
            label="Ele(a) é educado de forma diferente por ser especial? Tem mais facilidades?"
            id="interacaoSocial6"
            value={formData.interacaoSocial6}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />       
          <TextField
            label="Tem preferência por grupos especiais (família, amigos, etc) ou interage de forma igual com conhecidos e dessconhecidos?"
            id="interacaoSocial7"
            value={formData.interacaoSocial7}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />         
          <TextField
            label="Apresenta reação de medo? De quê?"
            id="interacaoSocial8"
            value={formData.interacaoSocial8}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />     
          <TextField
            label="Como reage a toque?"
            id="interacaoSocial9"
            value={formData.interacaoSocial9}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />        
          <TextField
            label="Sabe expressar seus sentimentos de forma adequada?"
            id="interacaoSocial10"
            value={formData.interacaoSocial10}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />        
          <TextField
            label="Tem contato com animal? Qual? Como é a relação com ele?"
            id="interacaoSocial11"
            value={formData.interacaoSocial11}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />        
          <TextField
            label="Cumprimenta as pessoas/agradece?(Obrigado, Bom dia, Boa tarde, etc)?"
            id="interacaoSocial12"
            value={formData.interacaoSocial12}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />        
          <TextField
            label="De modo geral como é seu humor?"
            id="interacaoSocial13"
            value={formData.interacaoSocial13}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />        
          <TextField
            label="Como reage diante de situações engraçadas e/ou prazerosas?"
            id="interacaoSocial14"
            value={formData.interacaoSocial14}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />        
          <TextField
            label="Expressa vontades de necessidades?"
            id="interacaoSocial15"
            value={formData.interacaoSocial15}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />           
        </CardContent>
      </Card>

      {/* Dificuldades e Desafios */}
      <Card sx={{ marginBottom: 4, boxShadow: 3, borderRadius: 2 }}>
        <CardHeader title="Dificuldades e Desafios" sx={{ backgroundColor: '#e3f2fd', color: '#1976d2' }} />
        <CardContent>
          <TextField
            label="O que é mais difícil para ele?"
            id="dificuldadesDesafios1"
            value={formData.dificuldadesDesafios1}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />
          <TextField
            label="Em que atividade ele precisa mais de ajuda?"
            id="dificuldadesDesafios2"
            value={formData.dificuldadesDesafios2}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />      
        </CardContent>
      </Card>   

       {/* Aprendizagem */}
       <Card sx={{ marginBottom: 4, boxShadow: 3, borderRadius: 2 }}>
        <CardHeader title="Aprendizagem" sx={{ backgroundColor: '#e3f2fd', color: '#1976d2' }} />
        <CardContent>
          <TextField
            label="É observador? Tem facilidade para gravar o que vê, ouve, sente etc?"
            id="aprendizagem1"
            value={formData.aprendizagem1}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />
          <TextField
            label="Como reage à histórias, explicações, músicas, filme, programas infantil, etc? Entende a mensagem que está sendo passada?"
            id="aprendizagem2"
            value={formData.aprendizagem2}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />      
           <TextField
            label="Apresenta mudança de comportamento, demonstrando aprendizagem?"
            id="aprendizagem3"
            value={formData.aprendizagem3}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />
          <TextField
            label="Como é sua concentração, em atividades (Simples, Complexa ou Prazerosas)?"
            id="aprendizagem4"
            value={formData.aprendizagem4}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />      
        </CardContent>
      </Card>   

       {/* Psicomotricidade */}
       <Card sx={{ marginBottom: 4, boxShadow: 3, borderRadius: 2 }}>
        <CardHeader title="Psicomotricidade" sx={{ backgroundColor: '#e3f2fd', color: '#1976d2' }} />
        <CardContent>
          <TextField
            label="Consegue ficar na fila?"
            id="psicomotricidade1"
            value={formData.Psicomotricidade1}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />
          <TextField
            label="Identifica formas e cores?"
            id="psicomotricidade2"
            value={formData.psicomotricidade2}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />      
           <TextField
            label="Lateralidade definida?"
            id="psicomotricidade3"
            value={formData.psicomotricidade3}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />
          <TextField
            label="Noção de tempo?"
            id="psicomotricidade4"
            value={formData.psicomotricidade4}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />      
        </CardContent>
      </Card>   

      {/* Comunicação e Linguagem */}
      <Card sx={{ marginBottom: 4, boxShadow: 3, borderRadius: 2 }}>
        <CardHeader title="Comunicação e Linguagem" sx={{ backgroundColor: '#e3f2fd', color: '#1976d2' }} />
        <CardContent>
          <TextField
            label="Como se comunica?"
            id="comunicacaoLinguagem1"
            value={formData.comunicacaoLinguagem1}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />
          <TextField
            label="Imita sons e gestos?"
            id="comunicacaoLinguagem2"
            value={formData.comunicacaoLinguagem2}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />      
           <TextField
            label="Mantém diálogo?"
            id="comunicacaoLinguagem3"
            value={formData.comunicacaoLinguagem3}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />
          <TextField
            label="Relata experiência(imediatas e passadas)?"
            id="comunicacaoLinguagem4"
            value={formData.comunicacaoLinguagem4}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />      
        </CardContent>
      </Card>   

       {/* Observações */}
       <Card sx={{ marginBottom: 4, boxShadow: 3, borderRadius: 2 }}>
        <CardHeader title="Observações(dinâmica familiar, etc)" sx={{ backgroundColor: '#e3f2fd', color: '#1976d2' }} />
        <CardContent>
        <TextField
            label="Digite aqui sua observação..."
            id="comunicacaoLinguagem4"
            value={formData.comunicacaoLinguagem4}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={20}
          />                
        </CardContent>
      </Card>   


      {/* Botão de Envio */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginTop: 1 }}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Enviar Dados
        </Button>
      </Box>
    </Box>
  );
}

export default PsychologistAssist;