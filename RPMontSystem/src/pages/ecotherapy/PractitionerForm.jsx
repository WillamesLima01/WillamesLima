import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const PractitionerForm = () => {
  const[ practitioner, setPractitioner] = useState({name: '',  birthDate: '', contact: '', email: '', responsible: '', zipcode: '', street: '', number: '', neighborhood: '', city: '', state: '', country: ''})
  const[errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const{ id } = useParams()
  const [cepLoading, setCepLoading] = useState(false)

  useEffect(() => {
    if(id) {
      axios.get(`/practitioners/${id}`)
      .then(Response => {
        setPractitioner(Response.data)
      })
      .catch(error =>{
        console.error('Erro ao buscar Praticante', error)
        handleErrors(error);
      })
    } else {
        setPractitioner({name: '',  birthDate: '', contact: '', email: '', responsible: '', zipcode: '', street: '', number: '', neighborhood: '', city: '', state: '', country: ''})
    }
  }, [id])

  function handleChange(event) {
    const{ name, value } = event.target
    setPractitioner(prevState => ({ ...prevState, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const payload = {
      name: practitioner.name,
      birthDate: practitioner.birthDate,
      contact: practitioner.contact,
      email: practitioner.email,
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
    }

    const method = id ? 'put' : 'post';
    const url = id ? `/practitioners/${id}` : '/practitioners';

    axios[method] (url, payload)
      .then(() => {
        alert(`Praticante ${ id ? 'Atualizado' : 'Adicionado' } com sucesso!`);
        navigate("practitioner-list");
      })
      .catch(error => {
        console.error("Ocorreu um erro: ", error);
        handleErrors(error);
      })
  }


  return (
    <div>
      
    </div>
  )
}

export default PractitionerForm
