import axios from '../../api';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './Ecotherapy.module.css';

const PractitionerForm = () => {
  const [practitioner, setPractitioner] = useState({
    name: '', birthDate: '', contact: '', email: '', education: '', responsible: '',
    zipcode: '', street: '', number: '', neighborhood: '', city: '', state: '', country: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();
  const [cepLoading, setCepLoading] = useState(false);

  useEffect(() => {
    if (id) {
      axios.get(`/practitioners/${id}`)
        .then(response => {
          const data = response.data;
          const address = data.practitionerAddressRequest || {};
          setPractitioner({
            name: data.name || '',
            birthDate: data.birthDate || '',
            contact: data.contact || '',
            email: data.email || '',
            education: data.education || '',
            responsible: data.responsible || '',
            zipcode: address.zipcode || '',
            street: address.street || '',
            number: address.number || '',
            neighborhood: address.neighborhood || '',
            city: address.city || '',
            state: address.state || '',
            country: address.country || ''
          });
        })
        .catch(error => {
          console.error('Erro ao buscar Praticante', error);
          handleErrors(error);
        });
    } else {
      setPractitioner({
        name: '', birthDate: '', contact: '', email: '', education: '', responsible: '',
        zipcode: '', street: '', number: '', neighborhood: '', city: '', state: '', country: ''
      });
    }
  }, [id]);

  function handleChange(event) {
    const { name, value } = event.target;
    setPractitioner(prevState => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const payload = {
      name: practitioner.name,
      birthDate: practitioner.birthDate,
      contact: practitioner.contact,
      email: practitioner.email,
      education: practitioner.education,
      responsible: practitioner.responsible,
      practitionerAddressRequest: {
        zipcode: practitioner.zipcode,
        street: practitioner.street,
        number: practitioner.number,
        neighborhood: practitioner.neighborhood,
        city: practitioner.city,
        state: practitioner.state,
        country: practitioner.country
      }
    };

    const method = id ? 'put' : 'post';
    const url = id ? `/practitioners/${id}` : '/practitioners';

    axios[method](url, payload)
      .then(() => {
        alert(`Praticante ${id ? 'Atualizado' : 'Adicionado'} com sucesso!`);
        navigate("/ecotherapy/listar-practitioners");
      })
      .catch(error => {
        console.error("Ocorreu um erro: ", error);
        handleErrors(error);
      });
  }

  function handleCepBlur(event) {
    const cep = event.target.value.replace(/\D/g, '');

    if (cep.length !== 8) {
      alert("CEP tem que ter 8 dígitos!");
      return;
    }

    setCepLoading(true);

    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => {
        if (response.data.erro) {
          alert("CEP não encontrado");
          setCepLoading(false);
          return;
        }

        setPractitioner(prevState => ({
          ...prevState,
          street: response.data.logradouro || '',
          neighborhood: response.data.bairro || '',
          city: response.data.localidade || '',
          state: response.data.uf || '',
          country: 'Brasil'
        }));

        setCepLoading(false);
      })
      .catch(error => {
        console.error("Erro ao buscar o CEP: ", error);
        setCepLoading(false);
      });
  }

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

  return (
    <div className={`${styles.container} mt-5`}>
      <h2>{id ? 'Editar Praticante' : 'Adicionar Praticante'}</h2>
      {errorMessage && (
        <div className='alert alert-danger' role="alert">
          {errorMessage}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome do Praticante</label>
          <input type="text" className="form-control" id="name" name="name" value={practitioner.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="birthDate">Data de Nascimento</label>
          <input type="date" className="form-control" id="birthDate" name="birthDate" value={practitioner.birthDate} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contato</label>
          <input type="text" className="form-control" id="contact" name="contact" value={practitioner.contact} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={practitioner.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="education">Escolaridade</label>
          <input type="text" className="form-control" id="education" name="education" value={practitioner.education} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="responsible">Responsável</label>
          <input type="text" className="form-control" id="responsible" name="responsible" value={practitioner.responsible} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="zipcode">CEP</label>
          <input type="text" className="form-control" id="zipcode" name="zipcode" value={practitioner.zipcode} onChange={handleChange} onBlur={handleCepBlur} required />
          {cepLoading && <p>Buscando CEP...</p>}
        </div>
        <div className="form-group">
          <label htmlFor="street">Rua/logradouro</label>
          <input type="text" className="form-control" id="street" name="street" value={practitioner.street} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="number">Número</label>
          <input type="text" className="form-control" id="number" name="number" value={practitioner.number} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="neighborhood">Bairro</label>
          <input type="text" className="form-control" id="neighborhood" name="neighborhood" value={practitioner.neighborhood} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="city">Cidade</label>
          <input type="text" className="form-control" id="city" name="city" value={practitioner.city} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="state">Estado</label>
          <input type="text" className="form-control" id="state" name="state" value={practitioner.state} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="country">País</label>
          <input type="text" className="form-control" id="country" name="country" value={practitioner.country} onChange={handleChange} required />
        </div>
        <div className={styles.botao}>
          <button type="submit" className="btn btn-primary">{id ? 'Atualizar' : 'Adicionar'}</button>
        </div>        
      </form>
    </div>
  );
};

export default PractitionerForm;
