import axios from '../../api';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaPenClip, FaPenToSquare } from 'react-icons/fa6';
import { FaRegTrashAlt } from 'react-icons/fa';
import { BsImages } from "react-icons/bs";
import styles from './Veterinary.module.css'

const EquineList = () => {
    const [equines, setEquines] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/equines')
        .then(Response => {
            setEquines(Response.data)
        })
        .catch(error => console.error('Ocorreu um erro: ', error));
    }, [])

    const fetchEquines = () => {
        axios.get('/equines')
        .then(Response => {
            setEquines(Response.data)
        })
        .catch(error => console.error("Ocorreu um erro: ", error));
    }

    function deleteEquine(id) {
        axios.delete(`equines/${id}`)
        .then(() => {
            alert("Equino excluído com sucesso!");
            fetchEquines();
        })
    }


  return (
    <div className={`${styles.container} mt-5`}>
        <h2 className='mb-4'>Lista de equinos</h2>

        <button onClick={() => navigate('/veterinary/add-equino')} className='btn btn-primary mb-2'>Adicionar equino</button>

        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Data Nascimento</th>
                    <th>Pelagem</th>
                    <th>Inclusão</th>
                    <th>Registro</th>
                    <th>Local</th>
                    <th>Sexo</th>
                    <th>Situação</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {
                    equines.map(equine => (
                        <tr key={equine.id}>
                            <td>{equine.name}</td>
                            <td>{equine.birthDate}</td>
                            <td>{equine.coat}</td>
                            <td>{equine.inclusion}</td>
                            <td>{equine.record}</td>
                            <td>{equine.local}</td>
                            <td>{equine.sex}</td>
                            <td>{equine.situation}</td>

                            <td className={styles.btAcao}>
                                <button title='editar' className="btn btn-sm btn-warning me-md-2" onClick={() => navigate(`/veterinary/editar-equino/${equine.id}`)}>
                                    <FaPenClip className={styles.btEditar} />
                                </button>
                                <button title='excluir' onClick={() => deleteEquine(equine.id)} className="btn btn-sm btn-danger me-md-2">
                                    <FaRegTrashAlt className={styles.btExcluir}/>                                    
                                </button>
                                <button title='assistir' className="btn btn-sm btn-info me-md-2" onClick={() => navigate(`/veterinary/assistir-equino/${equine.id}`)}>
                                    <FaPenToSquare className={styles.btAssistir} />
                                </button>
                                <button title='resenha descritiva' className="btn btn-sm btn-secondary me-md-2" onClick={() => navigate(`/veterinary/resenha-equino/${equine.id}`)}>
                                    <BsImages className={styles.btAssistir} />
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

export default EquineList