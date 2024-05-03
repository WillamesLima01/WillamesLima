import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './Veterinary.module.css';
import axios from '../../api';
import 'bootstrap/dist/css/bootstrap.min.css';

const EquineForm = () => {
    const [equine, setEquine] = useState({ name: '', birthDate: '', coat: '', inclusion: '', record: '', local: '', sex: ''});
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if(id) {
            axios.get(`/equines/${id}`)
            .then(response => {
                setEquine(response.data);
            })
            .catch(error => console.error("Erro ao buscar dados equino", error));
        } else {
            setEquine({ name: '', birthDate: '', coat: '', inclusion: '', record: '', local: '', sex: ''});
        }       
    }, [id]);

    function handleChange(event) {
        const { name, value } = event.target
        setEquine(prevState => ({...prevState, [name] : value}))
    }

    function handleSubmit(event) {
        event.preventDefault();
        const method = id ? 'put' : 'post';
        const url = id ? `/equines/${id}` : '/equines';

        axios[method](url, equine)
        .then(() => {
            alert(`Dados ${id ? 'atualizado' : 'adicionado'} com sucesso!`);
            navigate('/veterinary/listar-equino');
        })
        .catch(error => (console.error("Ocorreu um erro: ", error)))
    }
   
  return (
    <>
    <form className={`${styles.container} mt-5`} onSubmit={handleSubmit}>
        
        <h1 className={styles.cabeca}>Cadastro de Equino</h1>

        <section className={styles.etapa1}>
            <div className={styles.formgroup}>
                <label htmlFor="name">Nome</label>
                <input type='text' className={styles.formControl} id="name" name="name" value={equine.name} onChange={handleChange} required />
            </div>
            
            <div className={styles.formgroup}>
                <label htmlFor="birthDate">Data Nascimento</label>
                <input type='date' className={styles.formControl} id="birthDate" name="birthDate" value={equine.birthDate} onChange={handleChange} required />
            </div>

            <div className={styles.formgroup}>
                <label htmlFor="coat">Pelagem</label>
                <input type='text' className={styles.formControl} id="coat" name="coat" value={equine.coat} onChange={handleChange} required />
            </div>

            <div className={styles.formgroup}>
                <label htmlFor="inclusion">Inclusão</label>
                <input type='text' className={styles.formControl} id="inclusion" name="inclusion" value={equine.inclusion} onChange={handleChange} required />
            </div>
              
            <div className={styles.formgroup}>
                <label htmlFor="record">Registro</label>
                <input type='text' className={styles.formControl} id="record" name="record" value={equine.record} onChange={handleChange} required />
            </div>  

            <div className={styles.formgroup}>
                <label htmlFor="local">Local</label>
                <select id="local" name="local" className={styles.formControl} value={equine.local} onChange={handleChange} required>
                    <option selected disabled value="">Selecione</option>
                    <option value="RPMont">RPMont</option>
                    <option value="3º EPMont">3º EPMont</option>
                </select>
            </div>

            <div className={styles.formgroup}>
                <label htmlFor="sex">Sexo</label>
                <select id="sex" name="sex" className={styles.formControl} value={equine.sex} onChange={handleChange} required>
                    <option selected disabled value="">Selecione</option>
                    <option value="macho">Macho</option>
                    <option value="femea">Fêmea</option>
                </select>
            </div>
        </section>

        <div className={styles.botao}>
            <button type="submit" className={`btn btn-success me-md-2`}>{id ? 'Editar' : 'Salvar'} dados</button>           
        </div>

    </form>
    
    </>
  )
}

export default EquineForm;
