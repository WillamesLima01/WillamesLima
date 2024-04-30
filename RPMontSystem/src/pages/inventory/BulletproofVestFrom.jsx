import axios from '../../api';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './Inventory.module.css'

const BulletproofVestFrom = () => {
    const [vest, setVest] = useState({ code: '', description: '', type: '', size: '', validity: '', observation: '' });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            axios.get(`/vests/${id}`)
                .then(response => {
                    setVest(response.data);
                })
                .catch(error => console.error('Erro ao buscar colete', error));
        } else {
            setVest({ code: '', description: '', type: '', size: '', validity: '', observation: '' });
        }
    }, [id]);

    function handleChange(event) {
        const { name, value } = event.target;
        setVest(prevState => ({ ...prevState, [name]: value }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        const method = id ? 'put' : 'post';
        const url = id ? `/vests/${id}` : '/vests';

        axios[method](url, vest)
            .then(() => {
                alert(`Dados ${id ? 'atualizados' : 'adicionados'} com sucesso!`);
                navigate("/listar-coleteBalistico");
            })
            .catch(error => console.error("Ocorreu um erro: ", error));
    }

    return (
        <div className={`${styles.container} mt-5`}>
            <h2>{id ? 'Editar' : 'Cadastrar'} Colete</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.formgroup}>
                    <label htmlFor="code">Código</label>
                    <input type='text' className={styles.formControl} id="code" name="code" value={vest.code} onChange={handleChange} required />
                </div>
                <div className={styles.formgroup}>
                    <label htmlFor="description">Descrição</label>
                    <input type='text' className={styles.formControl} id="description" name="description" value={vest.description} onChange={handleChange} required />
                </div>
                <div className={styles.formgroup}>
                    <label htmlFor="type">Gênero</label>
                    <select id="type" name="type" className={styles.formControl} value={vest.type} onChange={handleChange} required>
                        <option value="">Selecione</option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                    </select>
                </div>

                <div className={styles.formgroup}>
                    <label htmlFor="size">Tamanho</label>
                    <select id="size" name="size" className={styles.formControl} value={vest.size} onChange={handleChange} required>
                        <option value="">Selecione</option>
                        <option value="P">P</option>
                        <option value="M">M</option>
                        <option value="G">G</option>
                        <option value="GG">GG</option>
                        <option value="extra G">Extra G</option>
                    </select>
                </div>

                <div className={styles.formgroup}>
                    <label htmlFor="validity">Validade</label>
                    <input type='date' className={styles.formControl} id="validity" name="validity" value={vest.validity} onChange={handleChange} required />
                </div>

                <div className={styles.formgroup}>
                    <label htmlFor="observation">Observação</label>
                    <input type='text' className={styles.formControl} id="observation" name="observation" value={vest.observation} onChange={handleChange} required />
                </div>

                <button type='submit' className="btn btn-success">{id ? 'Atualizar' : 'Adicionar'}</button>
            </form>

        </div>
    );
}

export default BulletproofVestFrom;