import axios from '../../api';
import React, { useEffect, useState } from 'react'
import { FaPenClip, FaPenToSquare } from 'react-icons/fa6';
import { TbListDetails } from "react-icons/tb";
import { FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import styles from './Ecotherapy.module.css';

const PractitionerList = () => {
    const [practitioners, setPractitioners] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/practitioners')
        .then(Response => {
            setPractitioners(Response.data)
        })
        .catch(error => console.error("ocorreu um erro: ", error));
    }, []);

    const fetchPractitioners = () => {
        axios.get('/practitioners')
        .then(Response => {
            setPractitioners(Response.data)
        })
        .catch(error => console.error("Ocorreu um erro: ", error));
    }

    function deletePractitioner(id) {
        axios.delete(`practitioner/${id}`)
        .then(() => {
            alert("Praticante de ecoterapia exluído com sucesso!");
            fetchPractitioners();
        })
    }

    const formatData = (data) => {
        const partesData = data.split("-");
        return partesData[2] + "/" + partesData[1] + "/" + partesData[0];
    }

  return (
    <div className={`${styles.container} mt-5`}>
        <h2 className='mb-4'>Lista de Praticantes</h2>

        <button onClick={() => navigate('/ecotherapy/add-practitioner')} className='btn btn-primary mb-2'>Cadastrar Praticante</button>

        <table className = {styles.table}>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Data nascimento</th>
                    <th>Contato</th>
                    <th>Email</th>
                    <th>Responsável</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {
                    practitioners.map(practitioner => (
                        <tr key={practitioner.id}>
                            <td>{practitioner.name}</td>
                            <td>{formatData(practitioner.birthDate)}</td>
                            <td>{practitioner.contact}</td>
                            <td>{practitioner.email}</td>
                            <td>{practitioner.responsible}</td>                            
                            <td>{`${practitioner.practitionerAddressResponse.street}, ${practitioner.practitionerAddressResponse.number} - ${practitioner.practitionerAddressResponse.neighborhood}, ${practitioner.practitionerAddressResponse.city}, ${practitioner.practitionerAddressResponse.state}, ${practitioner.practitionerAddressResponse.country}`}</td>
                            <td className={styles.btAcao}>
                                <button title='editar' className='btn btn-sm btn-warning me-md-2' onClick={() => navigate(`/ecotherapy/editar-practitioner/${practitioner.id}`)}>
                                    <FaPenClip className={styles.btEditar} />
                                </button>
                                <button title='excluir' onClick={() => deletePractitioner(practitioner.id)} className="btn btn-sm btn-danger me-md-2">
                                            <FaRegTrashAlt className={styles.btExcluir}/>                                    
                                </button>
                                <button title='assistir' className="btn btn-sm btn-info me-md-2" onClick={() => navigate(`/veterinary/assistir-equino/${equine.id}`)}>
                                    <FaPenToSquare className={styles.btAssistir} />
                                </button>
                                <button title='detalhes' className="btn btn-sm btn-secondary me-md-2" onClick={() => navigate(`/veterinary/resenha-equino/${equine.id}`)}>
                                    <TbListDetails className={styles.btAssistir} />
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      
    </div>
  )
}

export default PractitionerList
