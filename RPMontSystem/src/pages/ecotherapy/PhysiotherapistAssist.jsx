import React, { useState } from 'react';
import styles from './Especialidade.module.css';

const PhysiotherapistAssist = () => {
  const [dadosPessoais, setDadosPessoais] = useState({
    nome: '',
    dataNascimento: '',
    escolaridade: '',
    contato: '',
    nomeResponsavel: '',
  });

  const [diagnostico, setDiagnostico] = useState({
    medicoResponsavel: '',
    queixaPrincipal: '',
  });

  const handleDadosPessoaisChange = (event) => {
    const { name, value } = event.target;
    setDadosPessoais({ ...dadosPessoais, [name]: value });
  };

  const handleDiagnosticoChange = (event) => {
    const { name, value } = event.target;
    setDiagnostico({ ...diagnostico, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar os dados do formulário para o backend
  };

  return (
    <div className={styles.physiotherapistAssistContainer}> {/* Usa a classe de estilos do arquivo CSS Modules */}
      <h1>Atendimento do Fisioterapeuta</h1>
      <form onSubmit={handleSubmit} className={styles.formgrup}>
        <div className={styles.sectionContainer}> {/* Usa a classe de estilos do arquivo CSS Modules */}
          <h2>Dados Pessoais</h2>
          <div className={styles.inputGroup}> {/* Usa a classe de estilos do arquivo CSS Modules */}
            <label>Nome:</label>
            <input type="text" name="nome" value={dadosPessoais.nome} onChange={handleDadosPessoaisChange} />
          </div>
          <div className={styles.inputGroup}>
            <label>Data de Nascimento:</label>
            <input type="date" name="dataNascimento" value={dadosPessoais.dataNascimento} onChange={handleDadosPessoaisChange} />
          </div>
          {/* Adicione mais campos para os dados pessoais */}
        </div>

        <div className={styles.sectionContainer}>
          <h2>Diagnóstico Médico</h2>
          <div className={styles.inputGroup}>
            <label>Médico Responsável:</label>
            <input type="text" name="medicoResponsavel" value={diagnostico.medicoResponsavel} onChange={handleDiagnosticoChange} />
          </div>
          <div className={styles.inputGroup}>
            <label>Queixa Principal:</label>
            <input type="text" name="queixaPrincipal" value={diagnostico.queixaPrincipal} onChange={handleDiagnosticoChange} />
          </div>
          {/* Adicione mais campos para o diagnóstico */}
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default PhysiotherapistAssist;
