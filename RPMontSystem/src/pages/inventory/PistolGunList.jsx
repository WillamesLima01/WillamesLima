import axios from '../../api';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Inventory.module.css'
import { FaRegTrashAlt } from 'react-icons/fa';
import { FaPenClip } from 'react-icons/fa6';

const PistolGunList = () => {
    const[guns, setGuns] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/guns')
        .then(Response => {
            setGuns(Response.data)
        })
        .catch(error => console.error("Ocorreu um erro: ", error));
    }, []);

    const fetchGuns = () => {
        axios.get('/guns')
        .then(Response =>{
            setGuns(Response.data)
        })
        .catch(error => console.error("Ocorreu um erro: ", error));
    }

    function deleteGun(id) {
        axios.delete(`/guns/${id}`)
        .then(() => {
            alert("Armamento exclído com sucesso!")
            fetchGuns()
        })
        .catch(error =>console.error("Ocorreu um erro: ", error));
    }

  return (
    <div className={`${styles.container} mt-5`}> 
        <h2 className='mb-4'>Lista de Pistolas</h2>
        <button onClick={() => navigate('/inventory/add-pistola')} className='btn btn-primary mb-2'>Cadastrar Pistola</button>

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
                    guns.map(gun => (
                        <tr key={gun.id}>
                            <td>{gun.series}</td>
                            <td>{gun.description}</td>
                            <td>{gun.brand}</td>
                            <td>{gun.caliber}</td>
                            <td>{gun.charger}</td>
                            <td>{gun.observation}</td>

                            <td className={styles.btAcao}>
                                <button title='editar' className="btn btn-sm btn-warning me-md-2" onClick={() => navigate(`/inventory/editar-pistola/${gun.id}`)}>
                                    <FaPenClip  className= {styles.btEditar}/>
                                </button>
                                <button title='excluir' onClick={() => deleteGun(gun.id)} className="btn btn-sm btn-danger me-md-2">
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

export default PistolGunList