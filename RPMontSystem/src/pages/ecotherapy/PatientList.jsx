import axios from '../../api';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaPenClip, FaRegTrashAlt } from 'react-icons/fa';
import styles from './Ecotherapy.module.css';

const PatientList = () => {
    const [patients, setPatients] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/patients')
        .then(Response => {
            setPatients(Response.data)
        })
        .catch(error => console.error("Ocorreu um erro: ", error));
    }, []);

    const fetchPatients = () => {
        axios.get('/patients')
        .then(Response => {
            setPatients(Response.data)
        })
        .catch(error => console.error("Ocorreu um erro: ", error));
    }

    function deletePatient(id) {
        axios.delete(`patients/${id}`)
        .then(() => {
            alert("Paciente excluído com sucesso!");
            fetchPatients();
        })
    }

    return (
        <div className={`${styles.container} mt-5`}>
            <h2 className='mb-4'>Lista de Pacientes</h2>
            
            <button onClick={() => navigate('/patient/add-patient')} className="btn btn-primary mb-2">Cadastrar Paciente</button>
    
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Data nascimento</th>
                        <th>Contato</th>
                        <th>Email</th>
                        <th>Endereço</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        patients.map(patient => (
                            <tr key={patient.id}>
                                <td>{patient.name}</td>
                                <td>{patient.britDate}</td>
                                <td>{patient.contact}</td>
                                <td>{patient.email}</td>
                                <td>{patient.address}</td>
                                <td className={styles.btAcao}>
                                    <button title='editar' className="btn btn-sm btn-warning me-md-2" onClick={() => navigate(`/ecotherapy/editar-patient/${patient.id}`)}>
                                        <FaPenClip className={styles.btEditar} />
                                    </button>
                                    <button title='excluir' onClick={() => deletePatient(patient.id)} className="btn btn-sm btn-danger me-md-2">
                                        <FaRegTrashAlt className={styles.btExcluir}/>                                    
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

export default PatientList
