import axios from '../../api';
import { useEffect, useState } from 'react';
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
        .then(response => {
            setPractitioners(response.data);
        })
        .catch(error => console.error("Ocorreu um erro: ", error));
    }, []);

    const fetchPractitioners = () => {
        axios.get('/practitioners')
        .then(response => {
            setPractitioners(response.data);
        })
        .catch(error => console.error("Ocorreu um erro: ", error));
    };

    const deletePractitioner = (id) => {
        axios.delete(`/practitioner/${id}`)
        .then(() => {
            alert("Praticante de ecoterapia excluído com sucesso!");
            fetchPractitioners();
        })
        .catch(error => console.error("Ocorreu um erro: ", error));
    };

    const formatData = (data) => {
        const partesData = data.split("-");
        return `${partesData[2]}/${partesData[1]}/${partesData[0]}`;
    };

    const navigateToFichaEvolucao = (practitioner) => {
        const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
        navigate(`/equoterapia/fichaEvolucao/${practitioner.id}`, { state: { name: practitioner.name, date: currentDate } });
    };
    

    return (
        <div className={`${styles.container} mt-5`}>
            <h2 className={`${styles.cabeca1} mb-4`}>Lista de Praticantes</h2>

            <button onClick={() => navigate('/equoterapia/add-praticante')} className='btn btn-primary mb-2'>Cadastrar Praticante</button>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Data de nascimento</th>
                        <th>Contato</th>
                        <th>Email</th>
                        <th>Escolaridade</th>
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
                                <td>{practitioner.education}</td>
                                <td>{practitioner.responsible}</td>
                                
                                <td className={styles.btAcao}>
                                    <button title='Editar' className='btn btn-sm btn-warning me-md-2' onClick={() => navigate(`/equoterapia/editar-praticante/${practitioner.id}`)}>
                                        <FaPenClip className={styles.btEditar} />
                                    </button>
                                    <button title='Excluir' onClick={() => deletePractitioner(practitioner.id)} className="btn btn-sm btn-danger me-md-2">
                                        <FaRegTrashAlt className={styles.btExcluir}/>
                                    </button>
                                    <button title='Assistir' className="btn btn-sm btn-info me-md-2" onClick={() => navigate(`/equoterapia/assistir-praticante/${practitioner.id}`)}>
                                        <FaPenToSquare className={styles.btAssistir} />
                                    </button>
                                    <button title='Ficha de evolução' className="btn btn-sm btn-light me-md-2" onClick={() => navigateToFichaEvolucao(practitioner)}>
                                        <FaPenToSquare className={styles.btEvolucao} />
                                    </button>
                                    <button title='Detalhes' className="btn btn-sm btn-secondary me-md-2" onClick={() => navigate(`/equoterapia/dados-praticante/${practitioner.id}`)}>
                                        <TbListDetails className={styles.btAssistir} />
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default PractitionerList;
