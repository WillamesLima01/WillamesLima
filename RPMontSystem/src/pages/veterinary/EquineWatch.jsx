import React from 'react'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from '../../api';
import { useParams } from "react-router-dom";
import styles from './Veterinary.module.css'

const EquineWatch = () => {
    const [equine, setEquine] = useState({ name: '', birthDate: '', coat: '', inclusion: '', record: '', local: '', sex: ''});
    const [descricao, setDescricao] = useState('');    
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`/equines/${id}`)
        .then(Response => {
            setEquine(Response.data)
        })
        .catch(error => console.error('Ocorreu um erro: ', error));
    }, [id]);  

    function handleChange(event) {
        const { name, value } = event.target
        if (name === "descricao") {
            setDescricao(value);
        } else {
            setEquine(prevState => ({ ...prevState, [name]: value }));
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        const method = 'post';
        const url = `/equines/${id}`

        axios[method](url, equine)
        .then(() => {
            alert('adicionado com sucesso!');
            navigate('/veterinary/listar-equino');
        })
        .catch(error => (console.error("Ocorreu um erro: ", error)))
    }
   
    return (
        <>
            <div className={`${styles.container} mt-5`}>
                <h1 className={styles.cabeca}>Atendimento</h1>
    
                <section >
                    <div className= {styles.styloData}>
                        <div className= {styles.equineData}>
                            <div className={styles.formgroupservice}>
                                <label htmlFor="name" className= {styles.corFonte}>Nome</label>
                                <p id="name">{equine.name}</p>
                            </div>
                            
                            <div className={styles.formgroupservice}>
                                <label htmlFor="birthDate" className= {styles.corFonte}>Data Nascimento</label>
                                <p id="birthDate">{equine.birthDate}</p>
                            </div>
            
                            <div className={styles.formgroupservice}>
                                <label htmlFor="coat" className= {styles.corFonte}>Pelagem</label>
                                <p id="coat">{equine.coat}</p>
                            </div>
            
                            <div className={styles.formgroupservice}>
                                <label htmlFor="inclusion" className= {styles.corFonte}>Inclusão</label>
                                <p id="inclusion">{equine.inclusion}</p>
                            </div>
                            
                            <div className={styles.formgroupservice}>
                                <label htmlFor="record" className= {styles.corFonte}>Registro</label>
                                <p id="record">{equine.record}</p>
                            </div>  
            
                            <div className={styles.formgroupservice}>
                                <label htmlFor="local" className= {styles.corFonte}>Local</label>
                                <p id="local">{equine.local}</p>
                            </div>
            
                            <div className={styles.formgroupservice}>
                                <label htmlFor="sex" className= {styles.corFonte}>Sexo</label>
                                <p id="sex">{equine.sex}</p>
                            </div>
                        </div>
                    </div>
    
                    <div className={styles.resenhadescritiva}>
                        <label htmlFor="descricao" className= {styles.corFonte}>Descrição do Atendimento</label>
                        <textarea 
                            id="descricao" 
                            name="descricao" 
                            rows="7" 
                            cols="10" 
                            value={descricao} 
                            onChange={handleChange}
                        />
                    </div>  
                </section>
    
                <div className={styles.botao}>
                    <button type="submit" className={`btn btn-success me-md-2`}>Salvar dados</button>
                </div>
    
            </div>
        </>
    );
}

export default EquineWatch
