import axios from '../../api';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Inventory.module.css'
import { FaPenClip } from 'react-icons/fa6';
import { FaRegTrashAlt } from 'react-icons/fa';

const BulletproofVestList = () => {
    const[vests, setVests] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/vests')
        .then(Response => {
            setVests(Response.data)
        })
        .catch(error => console.error("Ocorreu um erro: ", error));
    }, []);

    const fetchVests = () => {
        axios.get('vests')
        .then(Response => {
            setVests(Response.data)
        })
        .catch(error => console.error("Ocorreu um erro: ", error));
    }

    function deleteVest(id) {
        axios.delete(`vests/${id}`)
        .then(() => {
            alert("Colete balístico excluído com sucesso!");
            fetchVests();
        })
    }

  return (
    <div className={styles.container} mt-5> 
        <h2 className='mb-4'>Lista de Colete Balístico</h2>
        <button onClick={() => navigate('/add-coleteBalistico')} className="btn btn-primary mb-2">Cadastrar Colete</button>

        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Número</th>
                    <th>Descrição</th>
                    <th>Tipo</th>
                    <th>Tamanho</th>
                    <th>Validade</th>
                    <th>Observação</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {
                    vests.map(vest => (
                        <tr key={vest.id}>                            
                            <td>{vest.code}</td>
                            <td>{vest.description}</td>
                            <td>{vest.type}</td>
                            <td>{vest.size}</td>
                            <td>{vest.validity}</td>
                            <td>{vest.observation}</td>

                            <td className={styles.btAcao}>
                                <button title='editar' className="btn btn-sm btn-warning me-md-2" onClick={() => navigate(`/editar-vest/${vest.id}`)}>
                                    <FaPenClip className={styles.btEditar} />
                                </button>
                                <button title='excluir' onClick={() => deleteVest(vest.id)} className="btn btn-sm btn-danger me-md-2">
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

export default BulletproofVestList