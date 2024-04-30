import axios from '../../api';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Inventory.module.css'
import { FaRegTrashAlt } from 'react-icons/fa';
import { FaPenClip } from 'react-icons/fa6';

const LongGunList = () => {
    const[longGuns, setLongGuns] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/longGuns')
        .then(Response => {
            setLongGuns(Response.data)
        })
        .catch(error => console.error("Ocorreu um error: ", error));
    }, []);

    const fetchLongGuns = () => {
        axios.get('/longGuns')
        .then(Response => {
            setLongGuns(Response.data)
        })
        .catch(error => console.error("Ocorreu um erro: ", error));
    }

    function deleteLongGun(id) {
        axios.delete(`longGuns/${id}`)
        .then(() => {
            alert("Item excluído com sucessso!")
            fetchLongGuns()
        })
    }

  return (
    <div className={`${styles.container} mt-5`}> 
        <h2 className='mb-4'>Lista de Arma Longa</h2>
        <button onClick={() => navigate('/add-armaLonga')} className='btn btn-primary mb-2'>Cadastrar Arma Longa</button>

        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Nº Série</th>
                    <th>Descrição</th>
                    <th>Marca</th>
                    <th>Calibre</th>
                    <th>Qtde Carregador</th>
                    <th>Observação</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {
                    longGuns.map(longGun => (
                        <tr key={longGun.id}>
                            <td>{longGun.series}</td>
                            <td>{longGun.description}</td>
                            <td>{longGun.brand}</td>
                            <td>{longGun.caliber}</td>
                            <td>{longGun.charger}</td>
                            <td>{longGun.observation}</td>

                            <td className={styles.btAcao}>
                                <button title='editar' className="btn btn-sm btn-warning me-md-2" onClick={() => navigate(`/editar-armaLonga/${longGun.id}`)}>
                                    <FaPenClip  className= {styles.btEditar}/>
                                </button>
                                <button title='excluir' onClick={() => deleteLongGun(longGun.id)} className="btn btn-sm btn-danger me-md-2">
                                    <FaRegTrashAlt className= {styles.btExcluir}/>
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

export default LongGunList