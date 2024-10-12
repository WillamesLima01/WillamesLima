import axios from '../../api';
import { useEffect, useState } from 'react';
import { FaPenClip, FaPenToSquare } from 'react-icons/fa6';
import { FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import styles from './User.module.css';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/users')
        .then(response => {
            setUsers(response.data);
        })
        .catch(error => console.error("Ocorreu um erro: ", error));
    }, []);

    const fetchUser = () => {
        axios.get('/users')
        .then(response => {
            setUsers(response.data);
        })
        .catch(error => console.error("Ocorreu um erro: ", error));
    };

    const deleteUser = (id) => {
        axios.delete(`/users/${id}`)
        .then(() => {
            alert("Praticante de ecoterapia excluído com sucesso!");
            fetchUser();
        })
        .catch(error => console.error("Ocorreu um erro: ", error));
    };

    return (
        <div className={`${styles.container} mt-5`}>
            <h2 className={`${styles.cabeca} mb-4`}>Lista de Usuários</h2>

            <button onClick={() => navigate('/usuarios/add-usuario')} className='btn btn-primary mb-2'>Cadastrar Usuarios</button>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Nome Completo</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Contato</th>
                        <th>Profissão</th>                        
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr key={user.id}>
                                <td>{user.fullName}</td>                                
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.contact}</td>
                                <td>{user.profession}</td>
                                
                                <td className={styles.btAcao}>
                                    <button title='Editar' className='btn btn-sm btn-warning me-md-2' onClick={() => navigate(`/usuarios/editar-usuario/${user.id}`)}>
                                        <FaPenClip className={styles.btEditar} />
                                    </button>
                                    <button title='Excluir' onClick={() => deleteUser(user.id)} className="btn btn-sm btn-danger me-md-2">
                                        <FaRegTrashAlt className={styles.btExcluir}/>
                                    </button>
                                    <button title='Assistir' className="btn btn-sm btn-info me-md-2" onClick={() => navigate(`/equoterapia/assistir-praticante/${user.id}`)}>
                                        <FaPenToSquare className={styles.btAssistir} />
                                    </button> 
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default UserList